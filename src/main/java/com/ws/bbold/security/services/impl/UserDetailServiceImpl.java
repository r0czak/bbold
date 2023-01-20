package com.ws.bbold.security.services.impl;

import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.repository.UserDetailRepository;
import com.ws.bbold.security.services.BloodDonationCenterService;
import com.ws.bbold.security.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailService {
    @Autowired
    UserDetailRepository userDetailRepository;
    @Autowired
    BloodDonationCenterService bloodDonationCenterService;
    @Override
    public void setUserBloodDonationCenter(Long userId, Long bloodDonationCenterId) {
        BloodDonationCenterEntity userBloodDonationCenter = bloodDonationCenterService.getBloodDonationCenterById(bloodDonationCenterId);

        userDetailRepository.findByUserId(userId).ifPresent(userDetail -> {
            userDetail.setBloodDonationCenter(userBloodDonationCenter);
        });
    }
}
