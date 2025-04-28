package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.Ligjeruesi.CreateLigjeruesi;
import com.example.HospitalManagment.data.diagnosis.CreateDiagnosis;
import com.example.HospitalManagment.data.diagnosis.ViewDiagnosis;
import com.example.HospitalManagment.entity.*;
import com.example.HospitalManagment.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LigjeruesiService  extends BasicServiceOperations<LigjeruesiRepository, Ligjeruesi> {
    public LigjeruesiService(LigjeruesiRepository repository){
        super(repository);
    }

}
