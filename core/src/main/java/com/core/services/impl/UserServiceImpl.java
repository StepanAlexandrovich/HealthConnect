package com.core.services.impl;

import com.core.converters.UserDtoToUserConverter;
import com.core.dto.UserDto;
import com.core.models.User;
import com.core.repositories.UserRepository;
import com.core.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserDtoToUserConverter converter;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public List<UserDto> getAllDto() {
        return getAll().stream().map(this::convertUserToUserDto).toList();
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        userRepository.save(converter.convert(userDto));
        return userDto;
    }
    public UserDto convertUserToUserDto(User user){
        return new UserDto(user.getLogin(), "password");
    }
}
