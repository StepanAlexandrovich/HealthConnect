package com.core.controllers;

import com.core.models.Department;
import com.core.services.impl.DepartmentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.awt.image.ImageObserver;
import java.awt.image.ImageProducer;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/clinic")
@RequiredArgsConstructor
public class ClinicController {
    private final DepartmentServiceImpl departmentService;

    @GetMapping("/test")
    public String test(){
        departmentService.createDepartment(new Department(null,"Dentist",null));
        departmentService.createDepartment(new Department(null,"Therapist",null));
        departmentService.createDepartment(new Department(null,"Surgeon",null));
        departmentService.createDepartment(new Department(null,"Ophthalmologist",null));
        return "test";
    }

    @GetMapping("/test2")
    public String test2(){
        Image image = new Image() {
            @Override
            public int getWidth(ImageObserver imageObserver) {
                return 0;
            }

            @Override
            public int getHeight(ImageObserver imageObserver) {
                return 0;
            }

            @Override
            public ImageProducer getSource() {
                return null;
            }

            @Override
            public Graphics getGraphics() {
                return null;
            }

            @Override
            public Object getProperty(String s, ImageObserver imageObserver) {
                return null;
            }
        };

        return "test2";
    }

    @GetMapping("/departments")
    public List<Department> departments(){
        return departmentService.getAll();
    }
}
