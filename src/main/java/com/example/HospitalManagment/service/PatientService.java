package com.example.HospitalManagment.service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.patient.CreatePatient;
import com.example.HospitalManagment.entity.City;
import com.example.HospitalManagment.entity.Patient;
import com.example.HospitalManagment.repository.CityRepository;
import com.example.HospitalManagment.repository.PatientRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@AllArgsConstructor
public class PatientService {

    private PatientRepository patientRepository;
    private CityRepository cityRepository;

    public CreatePatient createPatient(CreatePatient createPatient) {
        Patient patient = new Patient();
        if (createPatient != null){


            City city= cityRepository.findById(createPatient.getCityId()).orElseThrow(()->new NotFoundException("city not found"));

            patient.setFirstName(createPatient.getFirstName());
            patient.setLastName(createPatient.getLastName());
            patient.setEmail(createPatient.getEmail());
            patient.setPhoneNumber(createPatient.getPhoneNumber());
            patient.setDateOfBirth(createPatient.getDateOfBirth());
            patient.setStreet(createPatient.getStreet());
            patient.setAge(createPatient.getAge());
            patient.setCity(city);

            patientRepository.save(patient);

        }
        return createPatient;
    }
    public CreatePatient updatePatient(Long id,CreatePatient createPatient) {

        Patient patient =patientRepository.findById(id).orElseThrow(()->new NotFoundException("Patient Not Found"));
         patient.setFirstName(createPatient.getFirstName());
         patient.setLastName(createPatient.getLastName());
         patient.setEmail(createPatient.getEmail());
         patient.setPhoneNumber(createPatient.getPhoneNumber());
         patient.setDateOfBirth(createPatient.getDateOfBirth());
         patient.setStreet(createPatient.getStreet());
         patient.setAge(createPatient.getAge());
         patientRepository.save(patient);

         return createPatient;
    }

    public ResponseObject getAllPatients(){
        String methodName = "getAllPatients";
        log.info("Execute method"+methodName);
        ResponseObject responseObject = new ResponseObject();
        List<Patient> patients = patientRepository.findAll();

        responseObject.setData(patients);
        return responseObject;
    }
}
