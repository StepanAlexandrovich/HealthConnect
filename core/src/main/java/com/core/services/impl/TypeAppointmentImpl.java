package com.core.services.impl;

import com.core.converters.UniversalConverter;
import com.core.dto.TypeAppointmentDto;
import com.core.models.Department;
import com.core.models.TypeAppointment;
import com.core.repositories.DepartmentRepository;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.TypeAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeAppointmentImpl implements TypeAppointmentService {
    private final TypeAppointmentRepository  typeAppointmentRepository;
    private final DepartmentRepository departmentRepository;
    private final UniversalConverter universalConverter;

    @Override
    public List<TypeAppointment> getAll() {
        return typeAppointmentRepository.findAll();
    }

    @Override
    public TypeAppointmentDto createTypeAppointment(TypeAppointmentDto typeAppointmentDto) {
        TypeAppointment typeAppointment = universalConverter.convert(typeAppointmentDto, TypeAppointment.class);

        typeAppointment.setDepartment(departmentRepository.findById(typeAppointmentDto.getDepartmentId()).orElse(null));
        typeAppointmentRepository.save(typeAppointment);

        return typeAppointmentDto;
    }

    @Override
    public TypeAppointmentDto changeTypeAppointment(TypeAppointmentDto typeAppointmentDto) {
        Department department = typeAppointmentRepository.findById(typeAppointmentDto.getId()).orElse(null).getDepartment();
        TypeAppointment typeAppointment = universalConverter.convert(typeAppointmentDto, TypeAppointment.class);
        typeAppointment.setDepartment(department);

        return null;
    }


}
