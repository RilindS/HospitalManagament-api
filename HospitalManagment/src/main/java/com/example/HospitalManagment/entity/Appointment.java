package com.example.HospitalManagment.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "appoitment")
public class Appointment extends DataEntity{


    @ManyToOne(fetch = FetchType.LAZY)  // FetchType.LAZY to improve performance
    @JoinColumn(name = "doctor_id")  // doctor_id as the foreign key
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "reason")
    private String reason;

    //TODO add more fild in appoitment
}
