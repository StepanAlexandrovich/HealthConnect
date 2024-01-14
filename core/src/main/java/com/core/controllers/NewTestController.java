package com.core.controllers;

import com.core.models.Department;
import com.core.repositories.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("new_test")
@RequiredArgsConstructor
public class NewTestController {
    private final DepartmentRepository departmentRepository;
    @GetMapping("/test")
    public String departments(Model model){
        model.addAttribute("departments",departmentRepository.findAll());
        return "test";
    }
}
