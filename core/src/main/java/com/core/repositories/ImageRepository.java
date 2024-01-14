package com.core.repositories;

import com.core.models.DepartmentImage;
import org.springframework.data.jpa.repository.JpaRepository;
// переименов класс имадж
public interface ImageRepository extends JpaRepository<DepartmentImage,Long> {
}
