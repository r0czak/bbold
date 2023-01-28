package com.ws.bbold.controllers;

import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/files")
public class FileController {
    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public ResponseEntity<byte[]> getFile(@RequestParam String fileId) {
        FileDBEntity file = fileStorageService.getFile(fileId);

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"");

        return new ResponseEntity<>(fileStorageService.getFile(fileId).getData(), header, HttpStatus.OK);
    }
}
