package com.core.controllers;

import com.core.models.DepartmentImage;
import com.core.repositories.ImageRepository;
import com.core.services.impl.ImageServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;

@CrossOrigin(origins = {"http://localhost:3000/","http://localhost:3006/"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/images")
public class ImageController {
    private final ImageRepository imageRepository;
    private final ImageServiceImpl imageService;

    @GetMapping("/image/{imageId}")
    public ResponseEntity<?> getImage(@PathVariable Long imageId){
        DepartmentImage departmentImage = imageRepository.findById(imageId).orElse(null);
        return ResponseEntity.ok()
                .header("fileName", departmentImage.getOriginalFileName())
                .contentType(MediaType.valueOf(departmentImage.getContentType()))
                .contentLength(departmentImage.getSize())
                .body(new InputStreamResource(new ByteArrayInputStream( imageService.method(departmentImage.getBytesToString()) )));
    }

}
