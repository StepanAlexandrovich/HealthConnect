package com.core.services.impl;

import com.core.models.Department;
import com.core.models.TypeAppointment;
import com.core.repositories.TypeAppointmentRepository;
import com.core.services.TypeAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeAppointmentImpl implements TypeAppointmentService {
    private final TypeAppointmentRepository  typeAppointmentRepository;

    @Override
    public List<TypeAppointment> getAll() {
        return typeAppointmentRepository.findAll();
    }

    @Override
    public TypeAppointment createTypeAppointment(TypeAppointment typeAppointment) {
        return typeAppointmentRepository.save(typeAppointment);
    }
}
