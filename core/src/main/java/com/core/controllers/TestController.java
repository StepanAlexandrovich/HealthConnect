package com.core.controllers;

import com.core.converters.UserDtoToAdminConverter;
import com.core.dto.UserDto;
import com.core.models.Department;
import com.core.models.TypeAppointment;
import com.core.models.User;
import com.core.repositories.UserRepository;
import com.core.services.TypeAppointmentService;
import com.core.services.impl.DepartmentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {
    private final DepartmentServiceImpl departmentService;
    private final AdminController adminController;
    private final TypeAppointmentService typeAppointmentService;

    @GetMapping("/init1")
    public String test1(){
//        typeAppointmentService.createTypeAppointment(new TypeAppointment(null,"Dentist_description",departmentService.createDepartment(new Department(null,"Dentist",null,null))));
//        typeAppointmentService.createTypeAppointment(new TypeAppointment(null,"Therapist_description",departmentService.createDepartment(new Department(null,"Therapist",null,null))));
//        typeAppointmentService.createTypeAppointment(new TypeAppointment(null,"Surgeon_description",departmentService.createDepartment(new Department(null,"Surgeon",null,null))));
//        typeAppointmentService.createTypeAppointment(new TypeAppointment(null,"Ophthalmologist_description",departmentService.createDepartment(new Department(null,"Ophthalmologist",null,null))));

        return "departments created";
    }

    //--------------------------------------------
    private final UserRepository userRepository;
    private final UserDtoToAdminConverter userDtoToAdminConverter;
    @GetMapping("/init2")
    public String test2(){
        User admin = userDtoToAdminConverter.convert(new UserDto("Admin", "1"));
        userRepository.save(admin);
        return "admin created";
    }


    @GetMapping("/init3")
    public String test3(){
//        for (Department department : departmentService.getAll()) {
//            System.out.println(" title -> " + department.getTitle()+"; description -> "+department.getTypeAppointments().get(0).getDescription());
//        }

        return "init3";
    }
}
