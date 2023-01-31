package com.ws.bbold.entities.services;

import com.ws.bbold.entities.NewsEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface NewsService {
    NewsEntity getNewsById(Long id);

    List<NewsEntity> getAllNews();

    List<NewsEntity> getNewsByLocation(Long bloodCenterId);

    NewsEntity addNews(NewsEntity newsEntity, MultipartFile image);
}
