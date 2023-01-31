package com.ws.bbold.controllers;

import com.ws.bbold.entities.BloodAmountsEntity;
import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.entities.services.BloodDonationCenterService;
import com.ws.bbold.payload.dto.BloodAmountsDTO;
import com.ws.bbold.payload.dto.BloodCenterDetailsDTO;
import com.ws.bbold.payload.dto.BloodCenterSimpleDTO;
import com.ws.bbold.payload.dto.mapper.BloodAmountsMapper;
import com.ws.bbold.payload.dto.mapper.BloodCenterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/center")
public class BloodDonationCenterController {
    @Autowired
    private BloodDonationCenterService bloodDonationCenterService;


    @GetMapping
    @ResponseBody
    public ResponseEntity<List<BloodCenterSimpleDTO>> getBloodDonationCenterList() {
        List<BloodDonationCenterEntity> bloodDonationCenterEntities = bloodDonationCenterService.getAllBloodDonationCenters();

        if (bloodDonationCenterEntities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            List<BloodCenterSimpleDTO> bloodCenterSimpleDTOs = bloodDonationCenterEntities
                .stream()
                .map(BloodCenterMapper.INSTANCE::convertToBloodCenterSimpleDTO)
                .toList();

            return new ResponseEntity<>(bloodCenterSimpleDTOs, HttpStatus.OK);
        }
    }

    @GetMapping("/details")
    @ResponseBody
    public ResponseEntity<BloodCenterDetailsDTO> getBloodDonationCenterDetails(@RequestParam Long id) {
            BloodDonationCenterEntity bloodDonationCenterEntity = bloodDonationCenterService.getBloodDonationCenterById(id);
            return new ResponseEntity<>(BloodCenterMapper.INSTANCE.convertToBloodCenterDetailsDTO(bloodDonationCenterEntity), HttpStatus.OK);
    }

    @GetMapping("/blood-amounts")
    @ResponseBody
    public ResponseEntity<BloodAmountsDTO> getBloodAmounts(@RequestParam Long id) {
            BloodAmountsEntity bloodAmountsEntity = bloodDonationCenterService.getBloodAmountsByBloodDonationCenterId(id);
            return new ResponseEntity<>(BloodAmountsMapper.INSTANCE.convertToBloodAmountsDTO(bloodAmountsEntity), HttpStatus.OK);
    }
}
