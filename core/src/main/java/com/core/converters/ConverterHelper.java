package com.core.converters;

import com.core.models.Client;
import com.core.models.User;
import com.core.models.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ConverterHelper {
    private final PasswordEncoder encoder;
//    public User correctUser(User user){
//        user.setPassword(encoder.encode(user.getPassword()));
//        //user.getRoles().add(UserRole.ROLE_USER);
//        user.getRoles().add(UserRole.ROLE_CLIENT);
//        return user;
//    }

//    public Client correctClient(Client client){
//        correctUser(client);
//        //client.getRoles().add(UserRole.ROLE_CLIENT);
//        return client;
//    }

    public User correct(User user,UserRole userRole,boolean active){
        user.setPassword(encoder.encode(user.getPassword()));
        user.getRoles().add(userRole);
        user.setActive(active);
        return user;
    }
}
