package com.example.HospitalManagment.data.patient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewPatient {
    private Long id;
    private String firstName;
    private String lastName;
    private String street;
    private String phoneNumber;
    private String email;
    private String dateOfBirth;
    private Long age;
    private String city;
    private LocalDateTime createdAt;
    private String roomName;
    private String cityName;
}
