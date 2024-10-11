package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PatientRepository extends JpaRepository<Patient, Long> {

}
