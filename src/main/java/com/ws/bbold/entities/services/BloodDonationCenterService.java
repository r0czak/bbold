package com.ws.bbold.entities.services;


import com.ws.bbold.entities.BloodAmountsEntity;
import com.ws.bbold.entities.BloodDonationCenterEntity;

import java.util.List;

public interface BloodDonationCenterService {
    BloodDonationCenterEntity getBloodDonationCenterById(Long id);

    List<BloodDonationCenterEntity> getAllBloodDonationCenters();

    BloodAmountsEntity getBloodAmountsByBloodDonationCenterId(Long id);
}
