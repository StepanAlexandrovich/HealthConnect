package com.core.controllers;

import com.core.dto.DepartmentDto;
import com.core.services.impl.DepartmentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/clinic")
@RequiredArgsConstructor
public class ClinicController {
    private final DepartmentServiceImpl departmentService;
    @GetMapping("/departments")
    public List<DepartmentDto> departments(){
        return departmentService.getAll();
    }
}
