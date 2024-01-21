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


    private void createDepartment(String title){
        Department department = new Department();
        department.setTitle(title);
        department.setDescription(title + "_description");

        for (int i = 1; i < 3; i++) {
            TypeAppointment typeAppointment = new TypeAppointment();
            String title_appointment = title+"_appointment_"+i;
            typeAppointment.setTitle(title_appointment);
            typeAppointment.setDescription(title_appointment + "_description");
            typeAppointment.setDepartment(departmentService.createDepartment(department));

            //typeAppointmentService.createTypeAppointment(typeAppointment);
        }
    }
    @GetMapping("/init1")
    public String test1(){
        createDepartment("Dentist");
        createDepartment("Therapist");
        createDepartment("Surgeon");
        createDepartment("Ophthalmologist");

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
