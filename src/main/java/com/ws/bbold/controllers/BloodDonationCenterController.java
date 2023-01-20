package com.ws.bbold.controllers;

import com.ws.bbold.dto.BloodAmountsDTO;
import com.ws.bbold.entities.BloodAmountsEntity;
import com.ws.bbold.security.services.BloodDonationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/center")
public class BloodDonationCenterController {
    @Autowired
    private BloodDonationCenterService bloodDonationCenterService;

    @GetMapping("/blood-amounts")
    @ResponseBody
    public BloodAmountsDTO getBloodAmounts(@RequestParam Long id) {
        BloodAmountsEntity bloodAmountsEntity = bloodDonationCenterService.getBloodAmountsByBloodDonationCenterId(id);

        return convertToDTO(bloodAmountsEntity);
    }

    private BloodAmountsDTO convertToDTO(BloodAmountsEntity bloodAmountsEntity) {
        BloodAmountsDTO bloodAmountsDTO = new BloodAmountsDTO(
            bloodAmountsEntity.getAPositive(),
            bloodAmountsEntity.getANegative(),
            bloodAmountsEntity.getBPositive(),
            bloodAmountsEntity.getBNegative(),
            bloodAmountsEntity.getAbPositive(),
            bloodAmountsEntity.getAbNegative(),
            bloodAmountsEntity.getOPositive(),
            bloodAmountsEntity.getONegative());

        return bloodAmountsDTO;
    }
}
