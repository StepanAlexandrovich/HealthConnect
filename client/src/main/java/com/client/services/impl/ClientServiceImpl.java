package com.client.services.impl;

import com.client.services.ClientService;
import com.core.converters.ClientDtoToClientConverter;
import com.core.dto.ClientDto;
import com.core.models.Client;
import com.core.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;
    private final ClientDtoToClientConverter converter;

    @Override
    public ClientDto registration(ClientDto clientDto) {
        Client client = converter.convert(clientDto);
        clientRepository.save(client);
        return clientDto;
    }
}
