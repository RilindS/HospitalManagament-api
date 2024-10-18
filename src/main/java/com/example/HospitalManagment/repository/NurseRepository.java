package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.nurse.ViewNurse;
import com.example.HospitalManagment.entity.Nurse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NurseRepository extends JpaRepository<Nurse, Long> {
    @Query("select new com.example.HospitalManagment.data.nurse.ViewNurse(n.firstName,n.description,n.category,r.roomName)" +
            "from Nurse n" +
            " left join Room r on n.room.id =r.id " +
            "where n.deletedAt is null ")
    List<ViewNurse> viewAllNurses();
}
