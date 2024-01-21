package com.core.repositories;

import com.core.models.RootImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository<T extends RootImage> extends JpaRepository<T,Long> {
}
