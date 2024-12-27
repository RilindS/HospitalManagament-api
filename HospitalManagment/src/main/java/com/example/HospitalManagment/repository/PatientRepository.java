package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.patient.ViewPatient;
import com.example.HospitalManagment.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("select new com.example.HospitalManagment.data.patient.ViewPatient(p.id,p.firstName,p.lastName, p.street,p.phoneNumber,p.email,p.dateOfBirth,p.age,c.name,p.createdAt,r.roomName,c.name) " +
            "from Patient p " +
            "left join City c on p.city.id=c.id " +
            "left join Room r on p.room.id=r.id " +
            "where p.deletedAt is null")
    List<ViewPatient> findAllPatients();

    @Query("select new com.example.HospitalManagment.data.patient.ViewPatient(p.id,p.firstName,p.lastName, p.street,p.phoneNumber,p.email,p.dateOfBirth,p.age,c.name,p.createdAt,r.roomName,c.name) " +
            "from Patient p " +
            "left join City c on p.city.id=c.id " +
            "left join Room r on p.room.id=r.id " +
            "where p.id = :id and p.deletedAt is null")
    Optional<ViewPatient> findViewPatientById(Long id);


}
