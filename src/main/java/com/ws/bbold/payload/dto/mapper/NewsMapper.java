package com.ws.bbold.payload.dto.mapper;

import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.NewsEntity;
import com.ws.bbold.entities.services.FileStorageService;
import com.ws.bbold.payload.dto.NewsDetailsDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class NewsMapper {
    @Autowired
    protected FileStorageService fileStorageService;

    @Mapping(target ="imageId", expression = "java(newsEntity.getImage() != null ? newsEntity.getImage().getId() : null)")
    public abstract NewsDetailsDTO convertToNewsDetailsDTO(NewsEntity newsEntity);

    @Mapping(target = "image", source = "imageId", qualifiedByName = {"checkIfFileExists"})
    public abstract NewsEntity toNewsEntity(NewsDetailsDTO newsDetailsDTO);

    @Named("checkIfFileExists")
    public FileDBEntity checkIfFileExists(String imageId) {
        try {
            return fileStorageService.getFile(imageId);
        } catch (Exception e) {
            return null;
        }
    }
}

