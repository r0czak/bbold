package com.ws.bbold.security.services.impl;

import com.ws.bbold.entities.BloodAmountsEntity;
import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.repository.BloodAmountsRepository;
import com.ws.bbold.repository.BloodDonationCenterRepository;
import com.ws.bbold.security.services.BloodDonationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodDonationCenterServiceImpl implements BloodDonationCenterService {

    @Autowired
    private BloodDonationCenterRepository bloodDonationCenterRepository;
    @Autowired
    private BloodAmountsRepository bloodAmountsRepository;

    @Override
    public BloodDonationCenterEntity getBloodDonationCenterById(Long id) {
        return bloodDonationCenterRepository.findById(id).orElse(new BloodDonationCenterEntity());
    }

    @Override
    public List<BloodDonationCenterEntity> getAllBloodDonationCenters() {
        return bloodDonationCenterRepository.findAll();
    }

    @Override
    public BloodAmountsEntity getBloodAmountsByBloodDonationCenterId(Long id) {
        return bloodAmountsRepository.getBloodAmountsEntitiesByBloodDonationCenterEntityId(id);
    }

}
