package com.ws.bbold.payload.dto;

import com.ws.bbold.entities.AddressEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class NewsDetailsDTO implements Serializable {
    String title;

    String content;

    LocalDate date;

    String imageId;

    AddressEntity address;
}
