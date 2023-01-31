package com.ws.bbold.payload.request;

import com.ws.bbold.payload.dto.NewsDetailsDTO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class AddNewsRequest {
    @NotBlank
    private NewsDetailsDTO newsDetails;

    private MultipartFile image;
}
