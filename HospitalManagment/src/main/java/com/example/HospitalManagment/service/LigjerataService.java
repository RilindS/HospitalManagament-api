package com.example.HospitalManagment.service;

import com.example.HospitalManagment.entity.Ligjerata;
import com.example.HospitalManagment.entity.Ligjeruesi;
import com.example.HospitalManagment.repository.LigjerataRepository;
import com.example.HospitalManagment.repository.LigjeruesiRepository;
import org.springframework.stereotype.Service;

@Service
public class LigjerataService extends BasicServiceOperations<LigjerataRepository, Ligjerata> {
    public LigjerataService(LigjerataRepository repository){
        super(repository);
    }

}
