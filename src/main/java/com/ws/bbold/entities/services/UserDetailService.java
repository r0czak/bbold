package com.ws.bbold.entities.services;

public interface UserDetailService {
    void setUserBloodDonationCenter(Long userId, Long bloodDonationCenterId);

    Long getUserBloodDonationCenter(Long userId);
}
