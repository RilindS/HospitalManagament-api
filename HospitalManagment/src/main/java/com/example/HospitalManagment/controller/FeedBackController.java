package com.example.HospitalManagment.controller;

import com.example.HospitalManagment.data.FeedBack.CreateFeedBack;
import com.example.HospitalManagment.service.FeedBackService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Log4j2
@RestController
@RequestMapping("${base.url}/feed-back")
@AllArgsConstructor
public class FeedBackController {
    private final FeedBackService feedBackService;

    @PostMapping("/create")
    public ResponseEntity <CreateFeedBack> createFeedBack(@RequestBody @Valid CreateFeedBack createFeedBack) {

        CreateFeedBack createFeedBack1 = feedBackService.addFeedBack(createFeedBack);
        return ResponseEntity.status(HttpStatus.CREATED).body(createFeedBack1);
    }
}
