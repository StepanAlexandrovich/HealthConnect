package com.client.controllers;

import com.client.services.impl.ClientServiceImpl;
import com.core.dto.ClientDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/client")
@RequiredArgsConstructor
public class RegistrationController {
    private final ClientServiceImpl clientService;

    @PostMapping("/registration")
    public ResponseEntity<ClientDto> registration(@RequestBody ClientDto clientDto){
        System.out.println();
        clientService.registration(clientDto);
        return null;
    }
}
