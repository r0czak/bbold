package com.ws.bbold.payload.dto;

import com.ws.bbold.entities.AddressEntity;
import com.ws.bbold.entities.OpeningHoursEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class BloodCenterDetailsDTO implements Serializable {
    private Long id;
    private String name;

    private AddressEntity address;

    private List<OpeningHoursEntity> openingHours;

    private String imageId;

    private Double lattitude;

    private Double longitude;

    private String description;

    private String phoneNumber;

    private String email;

//    public static BloodCenterDetailsDTO convertToBloodDonationCenterDetailsDTO(BloodDonationCenterEntity bloodDonationCenterEntity) {
//        return new BloodCenterDetailsDTO(
//            bloodDonationCenterEntity.getId(),
//            bloodDonationCenterEntity.getName(),
//            bloodDonationCenterEntity.getAddress(),
//            bloodDonationCenterEntity.getOpeningHours(),
//            bloodDonationCenterEntity.getImage().getId(),
//            bloodDonationCenterEntity.getLattitude(),
//            bloodDonationCenterEntity.getLongitude(),
//            bloodDonationCenterEntity.getDescription(),
//            bloodDonationCenterEntity.getPhoneNumber(),
//            bloodDonationCenterEntity.getEmail());
//    }
}
