package com.example.HospitalManagment.controller;

import com.example.HospitalManagment.entity.Ligjeruesi;
import com.example.HospitalManagment.service.LigjeruesiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ligjerusesi")
public class LigjeruesiController extends BasicControllerOperations<LigjeruesiService, Ligjeruesi> {

    public LigjeruesiController(LigjeruesiService service) {
        super(service);
    }

}
