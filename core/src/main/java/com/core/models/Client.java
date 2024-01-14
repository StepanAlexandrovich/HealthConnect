package com.core.models;

import com.core.enums.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "clients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Client extends User{
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "secondName")
    private String secondName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "birthDay")
    private LocalDate birthDay;
    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;
}
