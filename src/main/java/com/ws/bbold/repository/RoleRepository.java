package com.ws.bbold.repository;

import com.ws.bbold.entities.RoleEntity;
import com.ws.bbold.entities.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
  Optional<RoleEntity> findByName(ERole name);
}
