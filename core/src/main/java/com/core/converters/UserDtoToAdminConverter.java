package com.core.converters;

import com.core.dto.UserDto;
import com.core.models.User;
import com.core.models.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDtoToAdminConverter extends Converter<UserDto,User>{
    private final ConverterHelper helper;
    @Override
    public User convert(UserDto userDto) {
        User user = super.modelMapper.map(userDto,User.class);
        return helper.correct(user,UserRole.ROLE_ADMIN,true);
    }

}
