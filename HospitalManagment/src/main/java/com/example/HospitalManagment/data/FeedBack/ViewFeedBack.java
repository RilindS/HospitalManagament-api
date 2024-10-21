package com.example.HospitalManagment.data.FeedBack;

import com.example.HospitalManagment.data.SimpleViewDTO;
import com.example.HospitalManagment.data.nurse.ViewNurse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewFeedBack {

    private String comment;
    private Long rating;

    private Long nurseId;
    private String nurseName;
}
