package com.ws.bbold.entities.services;

import com.ws.bbold.entities.DiscountEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface DiscountsService {
    DiscountEntity getDiscountById(Long id);

    List<DiscountEntity> getAllDiscounts();

    List<DiscountEntity> getDiscountsByLocation(Long bloodCenterId);

    DiscountEntity addDiscount(DiscountEntity discountEntity, MultipartFile image);
}
