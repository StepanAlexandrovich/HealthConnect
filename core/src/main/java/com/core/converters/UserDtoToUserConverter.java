package com.core.converters;

import com.core.dto.UserDto;
import com.core.models.Client;
import com.core.models.User;
import com.core.models.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDtoToUserConverter extends Converter<UserDto,User>{
    private final PasswordEncoder encoder;
    private final ConverterHelper helper;

    @Override
    public User convert(UserDto userDto) {
//        User user = new User();
//        user.setLogin(userDto.getLogin());
//        user.setPassword( encoder.encode(userDto.getPassword()) );
//        user.getRoles().add(UserRole.ROLE_USER);

        User user = super.modelMapper.map(userDto,User.class);
        return helper.correct(user,UserRole.ROLE_USER,true);
    }
}
