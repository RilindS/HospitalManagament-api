package com.example.HospitalManagment.data.nurse;

import com.example.HospitalManagment.entity.Room;
import com.example.HospitalManagment.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewNurse {

    private String firstName;

    private String description;

    private Category category;

    private String roomId;
}
