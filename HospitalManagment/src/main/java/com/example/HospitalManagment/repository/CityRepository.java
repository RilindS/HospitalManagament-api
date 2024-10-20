package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findAllByDeletedAtIsNull();
}
