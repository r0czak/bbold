package com.ws.bbold.controllers;

import com.ws.bbold.entities.NewsEntity;
import com.ws.bbold.entities.services.NewsService;
import com.ws.bbold.payload.dto.NewsDetailsDTO;
import com.ws.bbold.payload.dto.NewsSimpleDTO;
import com.ws.bbold.payload.dto.mapper.NewsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @Autowired
    private NewsMapper newsMapper;


    @GetMapping
    @ResponseBody
    public ResponseEntity<NewsDetailsDTO> getNewsDetails(@RequestParam Long newsId) {
        NewsEntity newsEntity = newsService.getNewsById(newsId);
        return new ResponseEntity<>(newsMapper.convertToNewsDetailsDTO(newsEntity), HttpStatus.OK);
    }

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity<List<NewsSimpleDTO>> getAllNews(@RequestParam Optional<Long> bloodCenterId) {
        if (bloodCenterId.isPresent()) {
            List<NewsEntity> newsEntities = newsService.getNewsByLocation(bloodCenterId.get());

            if (newsEntities.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                List<NewsSimpleDTO> newsSimpleDTOs = newsEntities
                    .stream()
                    .map(newsMapper::convertToNewsSimpleDTO)
                    .toList();

                return new ResponseEntity<>(newsSimpleDTOs, HttpStatus.OK);
            }
        } else {
            List<NewsEntity> newsEntities = newsService.getAllNews();

            if (newsEntities.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                List<NewsSimpleDTO> newsSimpleDTOs = newsEntities
                    .stream()
                    .map(newsMapper::convertToNewsSimpleDTO)
                    .toList();

                return new ResponseEntity<>(newsSimpleDTOs, HttpStatus.OK);
            }
        }
    }

    @PostMapping(consumes = {"multipart/form-data"})
    @ResponseBody
    public ResponseEntity<NewsDetailsDTO> addNews(
        @RequestPart("newsDetails") NewsDetailsDTO newsDetailsDTO,
        @RequestPart("image") @Valid MultipartFile image) {

        NewsEntity newsEntity = newsMapper.toNewsEntity(newsDetailsDTO);
        NewsDetailsDTO savedNews = newsMapper.convertToNewsDetailsDTO(newsService.addNews(newsEntity, image));

        return new ResponseEntity<>(savedNews, HttpStatus.OK);
    }
}
