package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
