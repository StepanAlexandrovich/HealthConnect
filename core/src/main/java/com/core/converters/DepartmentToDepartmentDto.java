package com.core.converters;

import com.core.dto.DepartmentDto;
import com.core.models.Department;
import org.springframework.stereotype.Component;

@Component
public class DepartmentToDepartmentDto extends Converter<Department, DepartmentDto>{
    @Override
    public DepartmentDto convert(Department department) {
        return super.modelMapper.map(department, DepartmentDto.class);
    }
}
