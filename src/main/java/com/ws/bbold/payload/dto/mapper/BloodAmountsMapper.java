package com.ws.bbold.payload.dto.mapper;

import com.ws.bbold.entities.BloodAmountsEntity;
import com.ws.bbold.payload.dto.BloodAmountsDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface BloodAmountsMapper {
    BloodAmountsMapper INSTANCE = Mappers.getMapper(BloodAmountsMapper.class);

    BloodAmountsDTO convertToBloodAmountsDTO(BloodAmountsEntity bloodAmountsEntity);
}
