package com.core.controllers;

import com.core.dto.ClientDto;
import com.core.dto.JwtResponseDto;
import com.core.dto.JwtCreateDto;
import com.core.dto.UserDto;
import com.core.services.CustomUserDetailsService;
import com.core.services.UserService;
import com.core.utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;


    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtTokenUtils jwtTokenUtils;

    @PostMapping("/auth")
    public ResponseEntity<?> authentication(@RequestBody JwtCreateDto jwtCreateDto){

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtCreateDto.getUsername(), jwtCreateDto.getPassword()));
        }catch (Exception e){
            return new ResponseEntity<>("bad username or password or not activate", HttpStatus.UNAUTHORIZED);
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(jwtCreateDto.getUsername());
        String token = jwtTokenUtils.generationToken(userDetails);
        return ResponseEntity.ok(new JwtResponseDto(token));
    }

//    @PostMapping("/registration")
//    public ResponseEntity<ClientDto> registration(@RequestBody UserDto userDto){
//        System.out.println();
//
//
//        return userService.createUser(userDto);
//    }

    @PostMapping("/registration")
    public String registration(@RequestBody UserDto userDto){
        userService.createUser(userDto);
        System.out.println();
        return "yes";
    }

}
