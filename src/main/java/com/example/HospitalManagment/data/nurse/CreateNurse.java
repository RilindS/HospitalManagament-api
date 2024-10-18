package com.example.HospitalManagment.data.nurse;

import com.example.HospitalManagment.data.BaseDTO;
import com.example.HospitalManagment.entity.Room;
import com.example.HospitalManagment.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CreateNurse extends BaseDTO {

    private String firstName;

    private String description;

    private Category category;

    private Room room;
}