package com.core.converters;

import org.modelmapper.ModelMapper;


public abstract class Converter<T,E> {
    final ModelMapper modelMapper;

    public Converter() {
        this.modelMapper = new ModelMapper();
    }

    public abstract E convert(T t);
}
