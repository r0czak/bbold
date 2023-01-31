package com.ws.bbold.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
public class BloodAmountsDTO implements Serializable {
    private Integer aPositive;

    private Integer aNegative;

    private Integer bPositive;

    private Integer bNegative;

    private Integer abPositive;

    private Integer abNegative;

    private Integer oPositive;

    private Integer oNegative;

//    public static BloodAmountsDTO convertToBloodAmountsDTO(BloodAmountsEntity bloodAmountsEntity) {
//        BloodAmountsDTO bloodAmountsDTO = new BloodAmountsDTO(
//            bloodAmountsEntity.getAPositive(),
//            bloodAmountsEntity.getANegative(),
//            bloodAmountsEntity.getBPositive(),
//            bloodAmountsEntity.getBNegative(),
//            bloodAmountsEntity.getAbPositive(),
//            bloodAmountsEntity.getAbNegative(),
//            bloodAmountsEntity.getOPositive(),
//            bloodAmountsEntity.getONegative());
//
//        return bloodAmountsDTO;
//    }
}
