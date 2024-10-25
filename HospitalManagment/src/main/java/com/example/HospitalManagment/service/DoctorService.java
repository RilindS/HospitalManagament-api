package com.example.HospitalManagment.service;
import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.departament.CreateDepartament;
import com.example.HospitalManagment.data.departament.ViewDepartament;
import com.example.HospitalManagment.data.doctor.CreateDoctor;
import com.example.HospitalManagment.data.doctor.ViewDoctor;
import com.example.HospitalManagment.entity.Departament;
import com.example.HospitalManagment.entity.Doctor;
import com.example.HospitalManagment.repository.DepartamentRepository;
import com.example.HospitalManagment.repository.DoctorRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public ResponseObject getDoctors() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewDoctor> doctors=doctorRepository.getAllDoctors();
        responseObject.setData(doctors);
        return responseObject;
    }

    public CreateDoctor createDoctor(CreateDoctor createDoctor){

        Doctor doctor = new Doctor();

        if(createDoctor!= null) {
            doctor.setFirstName(createDoctor.getFirstName());
            doctor.setLastName(createDoctor.getLastName());
            doctor.setAge(createDoctor.getAge());
            doctor.setGender(createDoctor.getGender());
            doctor.setPhoneNumber(createDoctor.getPhoneNumber());
            doctor.setSpecialization(createDoctor.getSpecialization());
            doctor.setQualification(createDoctor.getQualification());
            doctor.setIsActive(createDoctor.getIsActive());


            doctorRepository.save(doctor);
        }

        return createDoctor;

    }

    public CreateDoctor updateDoctor(CreateDoctor createDoctor,Long id){

        Doctor doctor = doctorRepository.findById(id).orElseThrow(()->new RuntimeException("Doctor not found"));

        doctor.setFirstName(createDoctor.getFirstName());
        doctor.setLastName(createDoctor.getLastName());
        doctor.setAge(createDoctor.getAge());
        doctor.setGender(createDoctor.getGender());
        doctor.setPhoneNumber(createDoctor.getPhoneNumber());
        doctor.setSpecialization(createDoctor.getSpecialization());
        doctor.setQualification(createDoctor.getQualification());
        doctor.setIsActive(createDoctor.getIsActive());


        return createDoctor;

    }

    public Boolean deleteDoctor(Long id){
        Doctor doctor = doctorRepository.findById(id).orElseThrow(()->new RuntimeException("Doctor not found"));

        doctor.setDeletedAt(LocalDateTime.now());

        return true;
    }
}

