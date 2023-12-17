package com.client.controllers;

import com.core.models.User;
import com.core.services.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClientController {
    private final UserServiceImpl userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getAll();
    }
}
