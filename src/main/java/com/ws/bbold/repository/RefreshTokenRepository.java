package com.ws.bbold.repository;

import com.ws.bbold.entities.RefreshTokenEntity;
import com.ws.bbold.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshTokenEntity, Long> {
  Optional<RefreshTokenEntity> findByToken(String token);

  @Modifying
  int deleteByUser(UserEntity user);
}
