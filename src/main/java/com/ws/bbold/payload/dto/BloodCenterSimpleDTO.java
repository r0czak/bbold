package com.ws.bbold.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class BloodCenterSimpleDTO implements Serializable {
    private Long id;
    private String name;
}
