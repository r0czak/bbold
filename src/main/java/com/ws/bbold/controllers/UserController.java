package com.ws.bbold.controllers;

import com.ws.bbold.entities.services.UserDetailService;
import com.ws.bbold.security.services.impl.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserDetailService userDetailService;

    @PostMapping("/center")
    @ResponseBody
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> setUserBloodDonationCenter(@AuthenticationPrincipal UserDetailsImpl user, @RequestParam Long centerId) {
        userDetailService.setUserBloodDonationCenter(user.getId(), centerId);
        return ResponseEntity.ok("Zmieniono centrum krwiodawstwa");
    }

    @GetMapping("/center")
    @ResponseBody
    public ResponseEntity<Long> getUserBloodDonationCenter(@AuthenticationPrincipal UserDetailsImpl user) {
        return new ResponseEntity<>(userDetailService.getUserBloodDonationCenter(user.getId()), HttpStatus.OK);
    }
}
