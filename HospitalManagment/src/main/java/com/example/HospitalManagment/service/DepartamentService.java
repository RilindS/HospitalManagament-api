package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.departament.CreateDepartament;
import com.example.HospitalManagment.data.departament.ViewDepartament;
import com.example.HospitalManagment.entity.Departament;
import com.example.HospitalManagment.repository.DepartamentRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class DepartamentService {

   private final DepartamentRepository departamentRepository;

    public ResponseObject getDepartaments() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewDepartament> departaments=departamentRepository.getAllDepartaments();
        responseObject.setData(departaments);
        return responseObject;
    }

    public CreateDepartament createDepartament(CreateDepartament createDepartament){

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

        departament.setDepartamentSize(createDepartament.getDepartamentSize());
        departament.setDepartamentStatus(createDepartament.getDepartamentStatus());
        departament.setDepartmentName(createDepartament.getDepartamentName());
        departament.setDescription(departament.getDescription());

        return createDepartament;

    }

    public Boolean deleteDepartament(Long id){
        Departament departament = departamentRepository.findById(id).orElseThrow(()->new RuntimeException("Department not found"));

        departament.setDeletedAt(LocalDateTime.now());
        departamentRepository.save(departament);

        return true;
    }
}
