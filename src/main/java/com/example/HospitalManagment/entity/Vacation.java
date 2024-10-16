package com.example.HospitalManagment.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "vacation")
public class Vacation extends DataEntity{

    @Column(name = "from")
    private LocalDateTime from ;

    @Column(name = "to")
    private LocalDateTime to ;

    @Column(name = "reason")
    private String reason;

    @Column(name="certification")
    private String certification ;
}
