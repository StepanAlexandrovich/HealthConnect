package com.core.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "department_images")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DepartmentImage extends RootImage {
    @ManyToOne
    private Department department;
}
