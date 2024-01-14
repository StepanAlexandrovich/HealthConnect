package com.core.controllers;

import com.core.models.RootImage;
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
    private final ImageServiceImpl<RootImage> imageService;

    @GetMapping("/image/{imageId}")
    public ResponseEntity<?> getImage(@PathVariable Long imageId){
        RootImage image = imageService.getById(imageId);

        return ResponseEntity.ok()
                .header("fileName", image.getOriginalFileName())
                .contentType(MediaType.valueOf(image.getContentType()))
                .contentLength(image.getSize())
                .body(new InputStreamResource(new ByteArrayInputStream( imageService.decodeString(image.getBytesToString()) )));
    }

}
