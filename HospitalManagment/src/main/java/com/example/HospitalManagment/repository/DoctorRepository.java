package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.doctor.ViewDoctor;
import com.example.HospitalManagment.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    @Query("select new com.example.HospitalManagment.data.doctor.ViewDoctor (d.firstName,d.lastName,d.age,d.gender,d.phoneNumber,d.specialization,d.qualification,d.isActive) " +
            "from Doctor d where d.deletedAt is null")
    List<ViewDoctor> getAllDoctors();
}
