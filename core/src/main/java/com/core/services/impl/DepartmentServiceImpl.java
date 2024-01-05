package com.core.services.impl;

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

    @Override
    public List<Department> getAll() {
        return departmentRepository.findAll();
    }

    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }
}
