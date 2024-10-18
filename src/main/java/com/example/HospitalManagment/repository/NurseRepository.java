package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.Nurse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NurseRepository extends JpaRepository<Nurse, Long> {
}
