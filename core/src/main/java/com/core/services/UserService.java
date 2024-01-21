package com.core.services;

import com.core.dto.UserDto;
import com.core.models.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    List<UserDto> getAllDto();

    UserDto createUser(UserDto userDto);
}
