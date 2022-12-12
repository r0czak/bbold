package com.ws.bbold.repository;

import com.ws.bbold.models.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetail, Long> {
  Boolean existsByPesel(String pesel);
}
