package com.core.controllers;

import com.core.dto.DepartmentDto;
import com.core.models.Department;
import com.core.repositories.DepartmentRepository;
import com.core.services.impl.DepartmentServiceImpl;
import com.core.services.impl.ImageServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000/","http://localhost:3006/"})
@RestController
@RequestMapping("/clinic")
@RequiredArgsConstructor
public class ClinicController {
    private final DepartmentServiceImpl departmentService;
    private final DepartmentRepository departmentRepository;
    private final ImageServiceImpl imageService;
    @GetMapping("/departments")
    public List<DepartmentDto> departments(){
        return departmentService.getAll();
    }
    @GetMapping("/department_details/{departmentId}")
    public ResponseEntity<DepartmentDto> departments(@PathVariable Long departmentId){
        return ResponseEntity.ok(departmentService.getById(departmentId));
    }
}
