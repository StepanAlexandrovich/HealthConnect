package com.core.services;

import com.core.dto.TypeAppointmentDto;
import com.core.models.Department;
import com.core.models.TypeAppointment;

import java.util.List;

public interface TypeAppointmentService {
    List<TypeAppointmentDto> getAll();

    TypeAppointmentDto createTypeAppointment(TypeAppointmentDto typeAppointmentDto);

    TypeAppointmentDto deleteTypeAppointment(Long typeAppointmentId);

    TypeAppointmentDto changeTypeAppointment(TypeAppointmentDto typeAppointmentDto);
}
