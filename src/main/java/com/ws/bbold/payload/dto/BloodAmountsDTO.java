package com.ws.bbold.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BloodAmountsDTO {
    private Integer aPositive;

    private Integer aNegative;

    private Integer bPositive;

    private Integer bNegative;

    private Integer abPositive;

    private Integer abNegative;

    private Integer oPositive;

    private Integer oNegative;
}
