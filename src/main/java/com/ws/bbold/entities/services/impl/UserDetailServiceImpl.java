package com.ws.bbold.entities.services.impl;

import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.entities.UserDetailEntity;
import com.ws.bbold.entities.services.BloodDonationCenterService;
import com.ws.bbold.entities.services.UserDetailService;
import com.ws.bbold.exception.ObjectNotFoundException;
import com.ws.bbold.exception.ObjectNotFoundType;
import com.ws.bbold.repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailServiceImpl implements UserDetailService {
    @Autowired
    UserDetailRepository userDetailRepository;
    @Autowired
    BloodDonationCenterService bloodDonationCenterService;
    @Override
    @Transactional
    public void setUserBloodDonationCenter(Long userId, Long bloodDonationCenterId) {
        BloodDonationCenterEntity userBloodDonationCenter = bloodDonationCenterService.getBloodDonationCenterById(bloodDonationCenterId);

        userDetailRepository.findByUserId(userId).ifPresent(userDetail -> {
            userDetail.setBloodDonationCenter(userBloodDonationCenter);
        });
    }

    @Override
    public Long getUserBloodDonationCenter(Long userId) {
        UserDetailEntity userDetail = userDetailRepository.findByUserId(userId).orElseThrow(() -> new ObjectNotFoundException(ObjectNotFoundType.USER, userId));
        BloodDonationCenterEntity bloodDonationCenter = bloodDonationCenterService.getBloodDonationCenterById(userDetail.getBloodDonationCenter().getId());

        return bloodDonationCenter.getId();
    }
}
