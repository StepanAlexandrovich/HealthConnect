package com.core.services.impl;

import com.core.converters.DepartmentToDepartmentDto;
import com.core.dto.DepartmentDto;
import com.core.models.Department;
import com.core.repositories.DepartmentRepository;
import com.core.services.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private final DepartmentRepository departmentRepository;
    private final DepartmentToDepartmentDto departmentToDepartmentDto;

    @Override
    public List<DepartmentDto> getAll() {
        return departmentRepository.findAll().stream().map(departmentToDepartmentDto::convert).toList();
    }

    @Override
    public DepartmentDto getById(Long id) {
        return departmentToDepartmentDto.convert(departmentRepository.findById(id).orElse(null));
    }

    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.findAll();
    }
}
