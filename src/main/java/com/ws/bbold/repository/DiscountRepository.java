package com.ws.bbold.repository;

import com.ws.bbold.entities.DiscountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscountRepository extends JpaRepository<DiscountEntity, Long> {
    List<DiscountEntity> getDiscountEntitiesByAddressId(Long id);

    List<DiscountEntity> getDiscountEntitiesByAddressIsNullOrAddressId(Long id);
}