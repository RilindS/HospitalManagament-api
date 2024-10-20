package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("select new com.example.HospitalManagment.data.Room.ViewRoom (r.roomName,r.description,r.floor,r.nrOfBeds,d.departmentName) from Room r left join Departament d on r.departament.id=d.id where r.deletedAt is null")
    List<Room> findAllRooms();
}
