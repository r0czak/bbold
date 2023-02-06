package com.ws.bbold.payload.dto;

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
public class DiscountsSimpleDTO implements Serializable {
    String title;

    String content;

    String imageId;

    LocalDate date;
}
