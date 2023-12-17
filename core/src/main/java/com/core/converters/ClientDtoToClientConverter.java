package com.core.converters;

import com.core.dto.ClientDto;
import com.core.models.Client;
import org.springframework.stereotype.Component;

@Component
public class ClientDtoToClientConverter extends Converter<ClientDto, Client>{
    @Override
    public Client convert(ClientDto clientDto) {
        return super.modelMapper.map(clientDto,Client.class);
    }
}
