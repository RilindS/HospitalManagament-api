package com.example.HospitalManagment.controller;


import com.example.HospitalManagment.data.city.CreateCity;
import com.example.HospitalManagment.data.patient.CreatePatient;
import com.example.HospitalManagment.service.CityService;
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
@RequestMapping("${base.url}/city")
@RestController
@AllArgsConstructor
public class CityController {

    private final CityService cityService;

    @PostMapping("/create")
    public ResponseEntity<CreateCity> createPatient(@RequestBody @Valid CreateCity createCity) {
        String methodName = "createTicket";
        log.info("{} -> Create Ticket", methodName);
        CreateCity createCity1 = cityService.createCity(createCity);
        log.info("{} -> Create ticket, response status: 200", methodName);
        return ResponseEntity.status(HttpStatus.CREATED).body(createCity1);
    }
}
