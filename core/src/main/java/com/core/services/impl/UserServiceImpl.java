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
    public UserDto createUser(UserDto userDto) {
        User user = converter.convert(userDto);
        user.setActive(true);
        userRepository.save(user);
        return userDto;
    }
}
