package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
