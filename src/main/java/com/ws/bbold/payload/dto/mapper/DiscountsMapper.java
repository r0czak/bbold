package com.ws.bbold.payload.dto.mapper;

import com.ws.bbold.entities.DiscountEntity;
import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.services.FileStorageService;
import com.ws.bbold.payload.dto.DiscountsDetailsDTO;
import com.ws.bbold.payload.dto.DiscountsSimpleDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class DiscountsMapper {
    @Autowired
    FileStorageService fileStorageService;

    @Mapping(target = "imageId", expression = "java(discountsEntity.getImage() != null ? discountsEntity.getImage().getId() : null)")
    public abstract DiscountsDetailsDTO convertToDiscountsDetailsDTO(DiscountEntity discountsEntity);

    @Mapping(target = "image", source = "imageId", qualifiedByName = {"checkIfFileExists"})
    public abstract DiscountEntity convertToDiscountEntity(DiscountsDetailsDTO discountsDetailsDTO);

    @Mapping(target = "content", source = "content", qualifiedByName = {"shortenContent"})
    @Mapping(target = "imageId", expression = "java(discountsEntity.getImage() != null ? discountsEntity.getImage().getId() : null)")
    public abstract DiscountsSimpleDTO convertToDiscountsSimpleDTO(DiscountEntity discountsEntity);

    @Named("checkIfFileExists")
    public FileDBEntity checkIfFileExists(String imageId) {
        try {
            return fileStorageService.getFile(imageId);
        } catch (Exception e) {
            return null;
        }
    }

    @Named("shortenContent")
    public String shortenContent(String content) {
        String shortContent = "";
        if (!content.isEmpty()) {
            if (content.length() > 50) {
                shortContent = content.substring(0, 47) + "...";
            } else {
                shortContent = content;
            }
        }

        return shortContent;
    }
}
