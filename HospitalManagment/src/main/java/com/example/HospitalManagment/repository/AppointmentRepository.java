package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.appointment.ViewAppointment;
import com.example.HospitalManagment.data.nurse.ViewNurse;
import com.example.HospitalManagment.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    @Query("select new com.example.HospitalManagment.data.appointment.ViewAppointment(a.id,a.patient.id,a.doctor.id,a.date,a.status,a.reason)" +
            "from Appointment a" +
            " left join Doctor d on a.doctor.id =d.id " +
            "where a.deletedAt is null ")
    List<ViewAppointment> viewAllAppointments();

}
