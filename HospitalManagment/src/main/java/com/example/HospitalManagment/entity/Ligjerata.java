package com.example.HospitalManagment.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class Ligjerata extends DataEntity{

    @Column(name = "LectureName")
    public String LectureName;

    @ManyToOne
    @JoinColumn(name = "ligjeruesi_id")
    private Ligjeruesi ligjeruesi;


}