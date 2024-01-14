package com.core.services;

import com.core.models.Department;
import com.core.models.TypeAppointment;

import java.util.List;

public interface TypeAppointmentService {
    List<TypeAppointment> getAll();

    TypeAppointment createTypeAppointment(TypeAppointment typeAppointment);
}
