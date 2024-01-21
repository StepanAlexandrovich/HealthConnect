package com.core.converters;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
public class UniversalConverter{
    private final ModelMapper modelMapper;

    public UniversalConverter() {
        this.modelMapper = new ModelMapper();
    }

    public <D> D convert(Object o, Class<D> typeAppointmentClass) {
        return modelMapper.map(o, typeAppointmentClass);
    }
}
