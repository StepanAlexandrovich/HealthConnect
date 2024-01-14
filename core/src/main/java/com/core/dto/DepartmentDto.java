package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {
    private Long id;
    private String title;
    private String description;
    private List<TypeAppointmentDto> typeAppointmentsList;
    private List<DepartmentImageDto> departmentImagesList;
}
