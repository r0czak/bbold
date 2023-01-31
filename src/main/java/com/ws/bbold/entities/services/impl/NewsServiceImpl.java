package com.ws.bbold.entities.services.impl;

import com.ws.bbold.entities.AddressEntity;
import com.ws.bbold.entities.BloodDonationCenterEntity;
import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.NewsEntity;
import com.ws.bbold.entities.services.BloodDonationCenterService;
import com.ws.bbold.entities.services.FileStorageService;
import com.ws.bbold.entities.services.NewsService;
import com.ws.bbold.exception.ObjectNotFoundException;
import com.ws.bbold.exception.ObjectNotFoundType;
import com.ws.bbold.repository.AddressRepository;
import com.ws.bbold.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    BloodDonationCenterService bloodDonationCenterService;
    @Autowired
    FileStorageService fileStorageService;

    @Override
    public NewsEntity getNewsById(Long id) {
        return newsRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException(ObjectNotFoundType.NEWS, id.toString()));
    }

    @Override
    public List<NewsEntity> getAllNews() {
        return newsRepository.findAll();
    }

    @Override
    public List<NewsEntity> getNewsByLocation(Long bloodCenterId) {
        BloodDonationCenterEntity bloodDonationCenterEntity = bloodDonationCenterService.getBloodDonationCenterById(bloodCenterId);
        AddressEntity addressEntity = addressRepository.findById(bloodDonationCenterEntity.getAddress().getId()).orElseThrow(() -> new ObjectNotFoundException(ObjectNotFoundType.ADDRESS, bloodCenterId.toString()));

        return newsRepository.getNewsEntitiesByAddressId(addressEntity.getId());
    }

    @Override
    @Transactional
    public NewsEntity addNews(NewsEntity newsEntity, MultipartFile image) {
        try {
            if (image != null) {
                FileDBEntity fileDBEntity = fileStorageService.store(image);
                newsEntity.setImage(fileDBEntity);
            } else {
                newsEntity.setImage(null);
            }

            return newsRepository.save(newsEntity);
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }
}
