package com.core.services.impl;

import com.core.models.DepartmentImage;
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
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    @Override
    public List<DepartmentImage> getAll() {
        return imageRepository.findAll();
    }

    @Override
    public DepartmentImage createImage(DepartmentImage departmentImage) {
        return imageRepository.save(departmentImage);
    }


    public byte[] method(String text){
        byte[] decode = Base64.getDecoder().decode(text);
        return decode;
    }
    public DepartmentImage convertMultipartToImage(MultipartFile file) {
        DepartmentImage departmentImage = new DepartmentImage();

        try {
//            image.setBytes(file.getBytes());
            System.out.println(Base64.getEncoder().encodeToString(file.getBytes()).length());
            departmentImage.setBytesToString(Base64.getEncoder().encodeToString(file.getBytes()));

            departmentImage.setSize(file.getSize());
            departmentImage.setName(file.getName());
            departmentImage.setContentType(file.getContentType());
            departmentImage.setOriginalFileName(file.getOriginalFilename());

//            Blob fileblob = Hibernate.getLobCreator(session).createBlob(filename.getBytes());

//            Hibernate.getLobCreator(Session session).createBlob()
//            Blob blob = Hibernate.createBlob(file.getInputStream());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return departmentImage;
    }
}
