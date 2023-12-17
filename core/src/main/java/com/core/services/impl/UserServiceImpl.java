package com.core.services.impl;

import com.core.dto.UserDto;
import com.core.models.User;
import com.core.models.UserRole;
import com.core.repositories.UserRepository;
import com.core.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = new User();
        user.setLogin(userDto.getLogin());
        user.setPassword( encoder.encode(userDto.getPassword()) );
        user.setActive(true);
        Set<UserRole> roles = new HashSet<>();
        roles.add(UserRole.ROLE_USER);
        user.setRoles(roles);
        userRepository.save(user);

        return userDto;
    }
}
