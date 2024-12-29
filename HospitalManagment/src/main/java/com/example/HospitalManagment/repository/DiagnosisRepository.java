package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.appointment.ViewAppointment;
import com.example.HospitalManagment.data.diagnosis.ViewDiagnosis;
import com.example.HospitalManagment.entity.Diagnosis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {

    @Query("select new com.example.HospitalManagment.data.diagnosis.ViewDiagnosis(d.id,d.diagnosisDetails,d.treatmentPlan,a.id,d.id,p.id)" +
            "from Diagnosis d" +
            " left join Doctor do on d.doctor.id =do.id " +
            " left join Patient p on d.patient.id =p.id " +
            " left join Appointment a on d.appointment.id =a.id " +
            "where d.deletedAt is null ")
    List<ViewDiagnosis> viewAllDiagnosis();
}
