package com.example.HospitalManagment.data.appointment;

import com.example.HospitalManagment.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewAppointment {

    private Long appointmentId;

    private Long patientId;

    private Long doctorId;

    private LocalDateTime data;

    private Status status;

    private String reason;
}
