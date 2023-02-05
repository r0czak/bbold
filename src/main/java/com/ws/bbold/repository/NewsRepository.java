package com.ws.bbold.repository;

import com.ws.bbold.entities.NewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<NewsEntity, Long> {
    List<NewsEntity> getNewsEntitiesByAddressId(Long id);

    List<NewsEntity> getNewsEntitiesByAddressIsNullOrAddressId(Long id);
}