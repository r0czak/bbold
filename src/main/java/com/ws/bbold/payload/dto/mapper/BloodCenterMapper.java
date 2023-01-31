package com.ws.bbold.payload.dto.mapper;

import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.payload.dto.BloodCenterDetailsDTO;
import com.ws.bbold.payload.dto.BloodCenterSimpleDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface BloodCenterMapper {
    BloodCenterMapper INSTANCE = Mappers.getMapper(BloodCenterMapper.class);

    @Mapping(target = "imageId", expression = "java(bloodDonationCenterEntity.getImage().getId())")
    BloodCenterDetailsDTO convertToBloodCenterDetailsDTO(BloodDonationCenterEntity bloodDonationCenterEntity);


    BloodCenterSimpleDTO convertToBloodCenterSimpleDTO(BloodDonationCenterEntity bloodDonationCenterEntity);
}
