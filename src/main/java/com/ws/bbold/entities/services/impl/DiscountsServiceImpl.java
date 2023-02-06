package com.ws.bbold.entities.services.impl;

import com.ws.bbold.entities.AddressEntity;
import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.entities.DiscountEntity;
import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.services.BloodDonationCenterService;
import com.ws.bbold.entities.services.DiscountsService;
import com.ws.bbold.entities.services.FileStorageService;
import com.ws.bbold.exception.ObjectNotFoundException;
import com.ws.bbold.exception.ObjectNotFoundType;
import com.ws.bbold.repository.AddressRepository;
import com.ws.bbold.repository.DiscountRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@AllArgsConstructor
public class DiscountsServiceImpl implements DiscountsService {
    @Autowired
    private DiscountRepository discountRepository;
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private BloodDonationCenterService bloodDonationCenterService;
    @Autowired
    private FileStorageService fileStorageService;

    @Override
    public DiscountEntity getDiscountById(Long id) {
        return discountRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException(ObjectNotFoundType.DISCOUNT, id.toString()));
    }

    @Override
    public List<DiscountEntity> getAllDiscounts() {
        return discountRepository.findAll();
    }

    @Override
    public List<DiscountEntity> getDiscountsByLocation(Long bloodCenterId) {
        BloodDonationCenterEntity bloodDonationCenterEntity = bloodDonationCenterService.getBloodDonationCenterById(bloodCenterId);
        AddressEntity addressEntity = addressRepository.findById(bloodDonationCenterEntity.getAddress().getId()).orElseThrow(() -> new ObjectNotFoundException(ObjectNotFoundType.ADDRESS, bloodCenterId.toString()));

        return discountRepository.getDiscountEntitiesByAddressIsNullOrAddressId(addressEntity.getId());
    }

    @Override
    public DiscountEntity addDiscount(DiscountEntity discountEntity, MultipartFile image) {
        try {
            if (image != null) {
                FileDBEntity fileDBEntity = fileStorageService.store(image);
                discountEntity.setImage(fileDBEntity);
            } else {
                discountEntity.setImage(null);
            }

            return discountRepository.save(discountEntity);
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }
}
