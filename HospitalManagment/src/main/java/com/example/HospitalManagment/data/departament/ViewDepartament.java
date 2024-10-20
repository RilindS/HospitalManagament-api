package com.example.HospitalManagment.data.departament;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewDepartament {

    private String departamentName;

    private String description;

    private Long departamentSize;

    private String departamentStatus;
}
