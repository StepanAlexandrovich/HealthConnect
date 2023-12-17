package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientDto extends UserDto{
    private String firstName;
    private String secondName;
    private String lastName;
    private LocalDate birthDay;
    private String gender;

    public ClientDto(String login, String password) {
        super(login, password);
    }
}
