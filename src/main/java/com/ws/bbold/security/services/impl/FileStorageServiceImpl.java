package com.ws.bbold.security.services.impl;

import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.repository.FileDBRepository;
import com.ws.bbold.security.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class FileStorageServiceImpl implements FileStorageService {

    @Autowired
    private FileDBRepository fileDBRepository;

    @Override
    public FileDBEntity store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDBEntity FileDB = new FileDBEntity(fileName, file.getContentType(), file.getBytes());

        return fileDBRepository.save(FileDB);
    }

    @Override
    public FileDBEntity getFile(String id) {
        Optional<FileDBEntity> fileDB = fileDBRepository.findById(id);

        return fileDB.orElse(new FileDBEntity());
    }

    @Override
    public void deleteFile(String id) {
        fileDBRepository.deleteById(id);
    }

    @Override
    public Stream<FileDBEntity> getAllFiles() {
        return fileDBRepository.findAll().stream();
    }
}
