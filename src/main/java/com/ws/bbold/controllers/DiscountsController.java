package com.ws.bbold.controllers;

import com.ws.bbold.entities.DiscountEntity;
import com.ws.bbold.entities.services.DiscountsService;
import com.ws.bbold.payload.dto.DiscountsDetailsDTO;
import com.ws.bbold.payload.dto.DiscountsSimpleDTO;
import com.ws.bbold.payload.dto.mapper.DiscountsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/discounts")
public class DiscountsController {
    @Autowired
    private DiscountsService discountsService;

    @Autowired
    private DiscountsMapper discountsMapper;

    @GetMapping
    @ResponseBody
    public ResponseEntity<DiscountsDetailsDTO> getDiscountsDetails(@RequestParam Long discountsId) {
        DiscountEntity discountEntity = discountsService.getDiscountById(discountsId);
        return new ResponseEntity<>(discountsMapper.convertToDiscountsDetailsDTO(discountEntity), HttpStatus.OK);
    }

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity<List<DiscountsSimpleDTO>> getAllNews(@RequestParam Optional<Long> bloodCenterId) {
        List<DiscountEntity> discountEntities;
        if (bloodCenterId.isPresent()) {
            discountEntities = discountsService.getDiscountsByLocation(bloodCenterId.get());
        } else {
            discountEntities = discountsService.getAllDiscounts();
        }

        if (discountEntities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            List<DiscountsSimpleDTO> discountsSimpleDTOs = discountEntities
                .stream()
                .map(discountsMapper::convertToDiscountsSimpleDTO)
                .toList();

            return new ResponseEntity<>(discountsSimpleDTOs, HttpStatus.OK);
        }
    }
}
