package com.ws.bbold.controllers;

import com.ws.bbold.entities.FileDBEntity;
import com.ws.bbold.entities.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/files")
public class FileController {
    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public ResponseEntity<byte[]> downloadFile(@RequestParam String fileId, @RequestParam Boolean download) {
        FileDBEntity file = fileStorageService.getFile(fileId);

        if (download) {
            HttpHeaders header = new HttpHeaders();
            header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"");

            return new ResponseEntity<>(fileStorageService.getFile(fileId).getData(), header, HttpStatus.OK);
        } else {
            String encodedFile = Base64.getEncoder().encodeToString(file.getData());
            return new ResponseEntity<>(encodedFile.getBytes(), HttpStatus.OK);
        }
    }
}
