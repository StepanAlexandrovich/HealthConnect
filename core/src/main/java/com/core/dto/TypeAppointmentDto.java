package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TypeAppointmentDto {
    private Long id;
    private String title;
    private String description;
    private Long departmentId;
    private Boolean active;
}
