package com.example.HospitalManagment.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;


@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class Ligjeruesi extends DataEntity{


    @Column(name = "lecturer_name")
    public String lecturerName;

    @Column(name = "departament")
    public String departament;

    @Column(name = "email")
    public String email;

}