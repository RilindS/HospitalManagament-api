package com.example.HospitalManagment.service;

import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.FeedBack.CreateFeedBack;
import com.example.HospitalManagment.data.FeedBack.ViewFeedBack;
import com.example.HospitalManagment.entity.*;
import com.example.HospitalManagment.repository.DoctorRepository;
import com.example.HospitalManagment.repository.FeedBackRepository;
import com.example.HospitalManagment.repository.NurseRepository;
import com.example.HospitalManagment.repository.PatientRepository;
import com.example.HospitalManagment.security.service.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FeedBackService {
    private final FeedBackRepository feedBackRepository;

    private final DoctorRepository doctorRepository;

    private final NurseRepository nurseRepository;

    private final JwtService jwtService;

    public ResponseObject getAllFeedBack() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewFeedBack> feedBacks = feedBackRepository.getViewFeedBack();
        responseObject.setData(feedBacks);
        return responseObject;
    }
    public CreateFeedBack addFeedBack(CreateFeedBack createFeedBack) {
        FeedBack feedBack = new FeedBack();
        if (createFeedBack != null) {
            feedBack.setComment(createFeedBack.getComment());
            feedBack.setRating(createFeedBack.getRating());

            if (createFeedBack.getDoctorId() != null) {
                Optional<Doctor> doctor = doctorRepository.findById(createFeedBack.getDoctorId());
                feedBack.setDoctor(doctor.get());
            } else {
                feedBack.setDoctor(null);
            }
            if (createFeedBack.getNurseId() != null) {
                Optional<Nurse> nurse = nurseRepository.findById(createFeedBack.getNurseId());
                feedBack.setNurse(nurse.get());
            } else {
                feedBack.setNurse(null);
            }

            // User user= UserDetails;
            User user = jwtService.getCurrentUser();
            feedBack.setUser(user);

            feedBackRepository.save(feedBack);
        }
        return createFeedBack;
    }
}
