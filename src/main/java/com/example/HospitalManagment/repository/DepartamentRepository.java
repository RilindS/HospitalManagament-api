package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.departament.ViewDepartament;
import com.example.HospitalManagment.entity.Departament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DepartamentRepository extends JpaRepository<Departament, Long> {

    @Query("select new com.example.HospitalManagment.data.departament.ViewDepartament(d.departmentName,d.description,d.departamentSize,d.departamentStatus) from Departament d where d.deletedAt is null ")
    List<ViewDepartament> getAllDepartaments();
}
