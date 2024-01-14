package com.core.services.impl;

import com.core.models.RootImage;
import com.core.repositories.ImageRepository;
import com.core.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl<T extends RootImage> implements ImageService<T> {
    private final ImageRepository<T> imageRepository;
    @Override
    public List<T> getAll() {
        return imageRepository.findAll();
    }
    @Override
    public T getById(Long imageId) {
        return imageRepository.findById(imageId).orElse(null);
    }
    @Override
    public T createImage(T image) {
        return imageRepository.save(image);
    }

    public byte[] decodeString(String text){
        return Base64.getDecoder().decode(text);
    }

    public String encodeToString(byte[] bytes){
        return Base64.getEncoder().encodeToString(bytes);
    }
    public T convertMultipartToImage(T image, MultipartFile file) {
        RootImage rootImage = new RootImage();

        try {
//            image.setBytes(file.getBytes());
            image.setBytesToString(encodeToString(file.getBytes()));

            image.setSize(file.getSize());
            image.setName(file.getName());
            image.setContentType(file.getContentType());
            image.setOriginalFileName(file.getOriginalFilename());

//            Blob fileblob = Hibernate.getLobCreator(session).createBlob(filename.getBytes());
//            Hibernate.getLobCreator(Session session).createBlob()
//            Blob blob = Hibernate.createBlob(file.getInputStream());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return image;
    }
}
