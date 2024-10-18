package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.departament.CreateDepartament;
import com.example.HospitalManagment.data.nurse.CreateNurse;
import com.example.HospitalManagment.entity.Departament;
import com.example.HospitalManagment.entity.Nurse;
import com.example.HospitalManagment.repository.DepartamentRepository;
import com.example.HospitalManagment.repository.NurseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor

public class NurseService {
    private final NurseRepository nurseRepository;

    public ResponseObject getNurses() {
        ResponseObject responseObject = new ResponseObject();
        List<Nurse> nurses=nurseRepository.findAll();
        responseObject.setData(nurses);
        return responseObject;
    }

    public CreateNurse createNurse(CreateNurse createNurse){

        Nurse nurse = new Nurse();

        if(createNurse!= null) {
            nurse.setNurseCategory(createNurse.getNurseCategory());
            nurse.setNurseRoomId(createNurse.getNurseRoomId());
            nurse.setNurseName(createNurse.getNurseName());
            nurse.setDescription(nurse.getDescription());

            nurseRepository.save(nurse);
        }

        return createNurse;

    }

    public CreateNurse updateNurse(CreateNurse createNurse,Long id){

        Nurse nurse = nurseRepository.findById(id).orElseThrow(()->new RuntimeException("Nurse not found"));

        Nurse updateNurse = nurse;
        nurse.setNurseCategory(createNurse.getNurseCategory());
        nurse.setNurseRoomId(createNurse.getNurseRoomId());
        nurse.setNurseName(createNurse.getNurseName());
        nurse.setDescription(nurse.getDescription());

        return createNurse;

    }

    public Boolean deleteNurse(Long id){
        Nurse nurse = nurseRepository.findById(id).orElseThrow(()->new RuntimeException("Nurse not found"));

        nurse.setDeletedAt(LocalDateTime.now());

        return true;
    }
}