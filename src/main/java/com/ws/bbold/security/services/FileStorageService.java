package com.ws.bbold.security.services;

import com.ws.bbold.entities.FileDBEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface FileStorageService {
    FileDBEntity store(MultipartFile file) throws IOException;

    FileDBEntity getFile(String id);

    void deleteFile(String id);

    Stream<FileDBEntity> getAllFiles();
}
