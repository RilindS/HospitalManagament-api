package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.departament.CreateDepartament;
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

    public CreateNurse createNurse(CreateDepartament createDepartament){

        Departament departament = new Departament();

        if(createDepartament!= null) {
            departament.setDepartamentSize(createDepartament.getDepartamentSize());
            departament.setDepartamentStatus(createDepartament.getDepartamentStatus());
            departament.setDepartmentName(createDepartament.getDepartamentName());
            departament.setDescription(departament.getDescription());

            departamentRepository.save(departament);
        }

        return createDepartament;

    }

    public CreateDepartament updateDepartament(CreateDepartament createDepartament,Long id){

        Departament departament = departamentRepository.findById(id).orElseThrow(()->new RuntimeException("Department not found"));

        Departament updateDepartament = departament;
        departament.setDepartamentSize(createDepartament.getDepartamentSize());
        departament.setDepartamentStatus(createDepartament.getDepartamentStatus());
        departament.setDepartmentName(createDepartament.getDepartamentName());
        departament.setDescription(departament.getDescription());

        return createDepartament;

    }

    public Boolean deleteDepartament(Long id){
        Departament departament = departamentRepository.findById(id).orElseThrow(()->new RuntimeException("Department not found"));

        departament.setDeletedAt(LocalDateTime.now());

        return true;
    }
}
