package com.core.converters;

import com.core.models.User;
import com.core.models.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ConverterHelper {
    private final PasswordEncoder encoder;
    public User correct(User user,UserRole userRole,boolean active){
        user.setPassword(encoder.encode(user.getPassword()));
        user.getRoles().add(userRole);
        user.setActive(active);
        return user;
    }

}
