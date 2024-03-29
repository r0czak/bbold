package com.ws.bbold.controllers;

import com.ws.bbold.entities.RefreshTokenEntity;
import com.ws.bbold.entities.RoleEntity;
import com.ws.bbold.entities.UserDetailEntity;
import com.ws.bbold.entities.UserEntity;
import com.ws.bbold.entities.enums.ERole;
import com.ws.bbold.exception.TokenRefreshException;
import com.ws.bbold.payload.request.LoginRequest;
import com.ws.bbold.payload.request.SignupRequest;
import com.ws.bbold.payload.request.TokenRefreshRequest;
import com.ws.bbold.payload.response.JwtResponse;
import com.ws.bbold.payload.response.MessageResponse;
import com.ws.bbold.payload.response.TokenRefreshResponse;
import com.ws.bbold.repository.RoleRepository;
import com.ws.bbold.repository.UserDetailRepository;
import com.ws.bbold.repository.UserRepository;
import com.ws.bbold.security.jwt.JwtUtils;
import com.ws.bbold.security.services.impl.RefreshTokenServiceImpl;
import com.ws.bbold.security.services.impl.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired AuthenticationManager authenticationManager;

  @Autowired UserRepository userRepository;

  @Autowired UserDetailRepository userDetailRepository;

  @Autowired RoleRepository roleRepository;

  @Autowired PasswordEncoder encoder;

  @Autowired JwtUtils jwtUtils;

  @Autowired
  RefreshTokenServiceImpl refreshTokenService;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication =
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    String jwt = jwtUtils.generateJwtToken(userDetails);

    List<String> roles =
        userDetails.getAuthorities().stream()
            .map(item -> item.getAuthority())
            .collect(Collectors.toList());

    RefreshTokenEntity refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());

    return ResponseEntity.ok(
        new JwtResponse(
            jwt,
            refreshToken.getToken(),
            userDetails.getId(),
            userDetails.getUsername(),
            userDetails.getEmail(),
            roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    if (userDetailRepository.existsByPesel(signUpRequest.getPesel())) {
      return ResponseEntity.badRequest()
          .body(new MessageResponse("Error: Pesel is already in use!"));
    }

    // Create new user's account
    UserEntity user =
        new UserEntity(
            signUpRequest.getUsername(),
            signUpRequest.getEmail(),
            encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRole();
    Set<RoleEntity> roles = new HashSet<>();

    if (strRoles == null) {
      RoleEntity userRole =
          roleRepository
              .findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(
          role -> {
            switch (role) {
              case "admin":
                RoleEntity adminRole =
                    roleRepository
                        .findByName(ERole.ROLE_ADMIN)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(adminRole);

                break;
              case "mod":
                RoleEntity modRole =
                    roleRepository
                        .findByName(ERole.ROLE_MODERATOR)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(modRole);

                break;
              default:
                RoleEntity userRole =
                    roleRepository
                        .findByName(ERole.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(userRole);
            }
          });
    }
    user.setRoles(roles);

    UserDetailEntity userDetail =
        new UserDetailEntity(
            signUpRequest.getFirstName(),
            signUpRequest.getLastName(),
            signUpRequest.getBirthDate(),
            signUpRequest.getGender(),
            signUpRequest.getPesel(),
            signUpRequest.getBloodType());

    userDetail.setUser(user);

    userRepository.save(user);
    userDetailRepository.save(userDetail);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  @PostMapping("/refreshtoken")
  public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
    String requestRefreshToken = request.getRefreshToken();

    return refreshTokenService
        .findByToken(requestRefreshToken)
        .map(refreshTokenService::verifyExpiration)
        .map(RefreshTokenEntity::getUser)
        .map(
            user -> {
              String token = jwtUtils.generateTokenFromUsername(user.getUsername());
              return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
            })
        .orElseThrow(
            () ->
                new TokenRefreshException(
                    requestRefreshToken, "Refresh token is not in database!"));
  }

  @PostMapping("/signout")
  public ResponseEntity<?> logoutUser() {
    UserDetailsImpl userDetails =
        (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Long userId = userDetails.getId();
    refreshTokenService.deleteByUserId(userId);
    return ResponseEntity.ok(new MessageResponse("Log out successful!"));
  }
}
