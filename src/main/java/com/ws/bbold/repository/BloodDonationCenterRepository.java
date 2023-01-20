package com.ws.bbold.repository;

import com.ws.bbold.entities.BloodDonationCenterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodDonationCenterRepository extends JpaRepository<BloodDonationCenterEntity, Long> {
}