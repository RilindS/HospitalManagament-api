package com.example.HospitalManagment.service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.RegisterRequestForAllEntityDTO;
import com.example.HospitalManagment.data.appointment.AppointmentDTO;
import com.example.HospitalManagment.data.appointment.DiagnosisDTO;
import com.example.HospitalManagment.data.appointment.PatientHistoryDTO;
import com.example.HospitalManagment.data.nurse.ViewNurse;
import com.example.HospitalManagment.data.patient.CreatePatient;
import com.example.HospitalManagment.data.patient.ViewPatient;
import com.example.HospitalManagment.entity.City;
import com.example.HospitalManagment.entity.Patient;
import com.example.HospitalManagment.entity.Room;
import com.example.HospitalManagment.repository.*;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Log4j2
@Service
@AllArgsConstructor
public class PatientService {

    private final RoomRepository roomRepository;
    private PatientRepository patientRepository;
    private CityRepository cityRepository;
    private final EmailService emailService;
    private final AppointmentRepository appointmentRepository;
    private final DiagnosisRepository diagnosisRepository;

    public void createPatient(RegisterRequestForAllEntityDTO createPatient) throws MessagingException, IOException {
        Patient patient = new Patient();
        if (createPatient != null){


            City city= cityRepository.findById(createPatient.getCityId()).orElseThrow(()->new NotFoundException("city not found"));
            Room room = roomRepository.findById(createPatient.getRoomId()).orElseThrow(()->new NotFoundException("room not found"));

            patient.setFirstName(createPatient.getFirstName());
            patient.setLastName(createPatient.getLastName());
            patient.setEmail(createPatient.getEmail());
            patient.setPhoneNumber(createPatient.getPhoneNumber());
            patient.setDateOfBirth(createPatient.getDateOfBirth());
            patient.setStreet(createPatient.getStreet());
            patient.setAge(createPatient.getAge());
            patient.setCity(city);
            patient.setRoom(room);


            patientRepository.save(patient);
            emailService.sendWelcomeEmailToPatient(patient.getId());

        }
    }
    public CreatePatient updatePatient(Long id,CreatePatient createPatient) {

        Patient patient =patientRepository.findById(id).orElseThrow(()->new NotFoundException("Patient Not Found"));

        City city= cityRepository.findById(createPatient.getCityId()).orElseThrow(()->new NotFoundException("city not found"));
        Room room = roomRepository.findById(createPatient.getRoomId()).orElseThrow(()->new NotFoundException("room not found"));

         patient.setFirstName(createPatient.getFirstName());
         patient.setLastName(createPatient.getLastName());
         patient.setEmail(createPatient.getEmail());
         patient.setPhoneNumber(createPatient.getPhoneNumber());
         patient.setDateOfBirth(createPatient.getDateOfBirth());
         patient.setStreet(createPatient.getStreet());
         patient.setAge(createPatient.getAge());
         patient.setCity(city);
         patient.setRoom(room);

         patientRepository.save(patient);

         return createPatient;
    }

    public ResponseObject getAllPatients(){
        String methodName = "getAllPatients";
        log.info("Execute method"+methodName);
        ResponseObject responseObject = new ResponseObject();
        List<ViewPatient> patients = patientRepository.findAllPatients();

        responseObject.setData(patients);
        return responseObject;
    }

    public Boolean deletePatient(Long id) {
        Patient patient = patientRepository.findById(id).orElseThrow(() -> new NotFoundException("Patient Not Found"));

        patient.setDeletedAt(LocalDateTime.now());
        patientRepository.save(patient);

        return Boolean.TRUE;
    }
    public ResponseObject getPatientById(Long id) {
        ResponseObject responseObject = new ResponseObject();
        ViewPatient nurse = patientRepository.findViewPatientById(id)
                .orElseThrow(() -> new RuntimeException("Nurse with ID " + id + " not found"));
        responseObject.setData(nurse);
        responseObject.setStatus(HttpStatus.OK.value());
        return responseObject;
    }
    public PatientHistoryDTO getPatientHistory(Long patientId) {

        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        List<AppointmentDTO> appointments = appointmentRepository.findAppointmentsByPatientId(patientId);
        List<DiagnosisDTO> diagnoses = diagnosisRepository.findDiagnosesByPatientId(patientId);

        return new PatientHistoryDTO(
                patient.getId(),
                patient.getFirstName(),
                patient.getLastName(),
                appointments,
                diagnoses
        );
    }
}
