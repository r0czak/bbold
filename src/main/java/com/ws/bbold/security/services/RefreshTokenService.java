package com.ws.bbold.security.services;

import com.ws.bbold.entities.RefreshTokenEntity;

import java.util.Optional;

public interface RefreshTokenService {
    Optional<RefreshTokenEntity> findByToken(String token);

    RefreshTokenEntity createRefreshToken(Long userId);

    RefreshTokenEntity verifyExpiration(RefreshTokenEntity token);

    int deleteByUserId(Long userId);
}
