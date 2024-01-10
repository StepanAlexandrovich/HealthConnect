package com.core.services;

import com.core.dto.DepartmentDto;
import com.core.dto.UserDto;
import com.core.models.Department;
import com.core.models.User;

import java.util.List;

public interface DepartmentService {
    List<DepartmentDto> getAll();

    DepartmentDto getById(Long id);

    Department createDepartment(Department department);
}
