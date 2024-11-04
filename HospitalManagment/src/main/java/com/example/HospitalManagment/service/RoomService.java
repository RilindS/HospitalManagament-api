package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.Room.CreateRoom;
import com.example.HospitalManagment.entity.Room;
import com.example.HospitalManagment.repository.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public CreateRoom createRoom(CreateRoom createRoom) {

        Room room=new Room();
        if(createRoom!=null){
            room.setRoomName(createRoom.getRoomName());
            room.setDescription(createRoom.getDescription());
            room.setFloor(createRoom.getFloor());
            room.setNrOfBeds(createRoom.getNrOfBeds());
        }
        roomRepository.save(room);
        return createRoom;
    }

    public CreateRoom updateRoom(Long id, CreateRoom createRoom) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found!"));

        room.setRoomName(createRoom.getRoomName());
        room.setDescription(createRoom.getDescription());
        room.setFloor(createRoom.getFloor());
        room.setNrOfBeds(createRoom.getNrOfBeds());

        roomRepository.save(room);
        return createRoom;

    }
    public boolean deleteRoom(Long id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found!"));
        room.setDeletedAt(LocalDateTime.now());
        roomRepository.save(room);
        return true;
    }

    public ResponseObject allRooms(){
        List<Room> rooms = roomRepository.findAllRooms();
        ResponseObject responseObject = new ResponseObject();
        responseObject.setData(rooms);
        return responseObject;
    }
}
