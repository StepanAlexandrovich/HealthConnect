package com.core.converters;

import com.core.dto.ClientDto;
import com.core.models.Client;
import com.core.models.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ClientDtoToClientConverter extends Converter<ClientDto, Client>{
    private final ConverterHelper helper;
    @Override
    public Client convert(ClientDto clientDto) {
        Client client = super.modelMapper.map(clientDto,Client.class);
        return (Client) helper.correct(client, UserRole.ROLE_CLIENT,true);
    }
}
