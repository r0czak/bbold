package com.ws.bbold.repository;

import com.ws.bbold.entities.UserDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetailEntity, Long> {
  Boolean existsByPesel(String pesel);

  Optional<UserDetailEntity> findByUserId(Long userId);
}
