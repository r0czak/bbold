package com.ws.bbold.repository;

import com.ws.bbold.entities.BloodAmountsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodAmountsRepository extends JpaRepository<BloodAmountsEntity, Long> {
    BloodAmountsEntity getBloodAmountsEntitiesByBloodDonationCenterEntityId(Long id);
}