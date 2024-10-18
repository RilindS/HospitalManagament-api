package com.example.HospitalManagment.entity;

import com.example.HospitalManagment.enums.Category;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "nurse")
public class Nurse extends DataEntity{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;
}
