package com.ws.bbold.payload.dto;

import com.ws.bbold.entities.NewsEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class NewsSimpleDTO implements Serializable {
    String title;

    String content;

    String imageId;

    LocalDate date;

    public static NewsSimpleDTO convertToNewsSimpleDTO(NewsEntity newsEntity) {
        String shortContent = "";
        if (!newsEntity.getContent().isEmpty()) {
            if (newsEntity.getContent().length() > 50) {
                shortContent = newsEntity.getContent().substring(0, 47) + "...";
            } else {
                shortContent = newsEntity.getContent();
            }
        }
        return NewsSimpleDTO.builder()
                .title(newsEntity.getTitle())
                .content(shortContent)
                .date(newsEntity.getDate())
                .imageId(newsEntity.getImage().getId())
                .build();
    }
}
