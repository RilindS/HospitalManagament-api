package com.example.HospitalManagment.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "departament")
public class Departament extends DataEntity{

    @Column(name = "department_name")
    private String departmentName;

    @Column(name = "description")
    private String description;

    @Column(name = "departament_size")
    private Long departamentSize;

    @Column(name = "departament_status")
    private String departamentStatus;


}
