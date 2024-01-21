package com.core.controllers;

import com.core.converters.UniversalConverter;
import com.core.dto.DepartmentDto;
import com.core.dto.JwtCreateDto;
import com.core.dto.JwtResponseDto;
import com.core.dto.TypeAppointmentDto;
import com.core.models.Department;
import com.core.models.DepartmentImage;
import com.core.models.TypeAppointment;
import com.core.services.CustomUserDetailsService;
import com.core.services.TypeAppointmentService;
import com.core.services.impl.DepartmentServiceImpl;
import com.core.services.impl.ImageServiceImpl;
import com.core.utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3006/")
@RestController
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/api/v1/admin")
public class AdminController {
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtTokenUtils jwtTokenUtils;
    //---------------------
    private final DepartmentServiceImpl departmentService;
    private final TypeAppointmentService typeAppointmentService;
    private final ImageServiceImpl<DepartmentImage> imageService;

    private final UniversalConverter universalConverter;

    @PostMapping("/auth_admin")
    public ResponseEntity<?> authentication(@RequestBody JwtCreateDto jwtCreateDto){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtCreateDto.getUsername(), jwtCreateDto.getPassword()));
        }catch (Exception e){
            return new ResponseEntity<>("bad username or password or not activate", HttpStatus.UNAUTHORIZED);
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(jwtCreateDto.getUsername());
        String token = jwtTokenUtils.generationToken(userDetails);
        return ResponseEntity.ok(new JwtResponseDto(token));
    }

    @PostMapping("/create_department")
    public DepartmentDto createDepartment(Department department, MultipartFile file){
        department = departmentService.createDepartment(department);

        DepartmentImage departmentImage = imageService.convertMultipartToImage(new DepartmentImage(),file);
        departmentImage.setDepartment(department);
        imageService.createImage(departmentImage);

        return departmentService.getById(department.getId());
    }
    @PostMapping("/add_appointment")
    public TypeAppointmentDto addTypeAppointment(@RequestBody TypeAppointmentDto typeAppointmentDto){
        return typeAppointmentService.createTypeAppointment(typeAppointmentDto);
    }

    @GetMapping("/delete_appointment/{appointmentId}")
    public TypeAppointmentDto deleteTypeAppointment(@PathVariable Long appointmentId){

        return typeAppointmentService.deleteTypeAppointment(appointmentId);
    }

    @GetMapping("/departments")
    public List<DepartmentDto> departments(){
        return departmentService.getAll();
    }

}
