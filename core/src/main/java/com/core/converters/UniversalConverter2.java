package com.core.converters;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UniversalConverter2 <DTO,T extends Class>{
    private final ModelMapper modelMapper;
    public UniversalConverter2() {
        this.modelMapper = new ModelMapper();
    }




}
