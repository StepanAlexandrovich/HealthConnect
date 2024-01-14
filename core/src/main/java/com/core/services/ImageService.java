package com.core.services;

import com.core.models.DepartmentImage;

import java.util.List;

public interface ImageService {
    List<DepartmentImage> getAll();

    DepartmentImage createImage(DepartmentImage departmentImage);
}
