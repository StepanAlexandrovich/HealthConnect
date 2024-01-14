package com.core.services;

import com.core.dto.DepartmentDto;
import com.core.models.Department;

import java.util.List;

public interface DepartmentService {
    List<DepartmentDto> getAll();
    DepartmentDto getById(Long id);
    Department createDepartment(Department department);

    List<Department> getAllDepartment();
}
