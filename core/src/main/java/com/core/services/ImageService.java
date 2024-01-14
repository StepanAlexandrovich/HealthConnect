package com.core.services;

import com.core.models.RootImage;

import java.util.List;

public interface ImageService<T extends RootImage> {
    List<T> getAll();
    T getById(Long imageId);
    T createImage(T image);
}
