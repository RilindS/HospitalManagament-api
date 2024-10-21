package com.example.HospitalManagment.repository;

import com.example.HospitalManagment.data.inventory.ViewInventory;
import com.example.HospitalManagment.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    @Query("select  new com.example.HospitalManagment.data.inventory.ViewInventory (i.article,i.description,i.quantity,i.totalPrice) from Inventory i where i.deletedAt is null")
    List<ViewInventory> findAllInventory();
}
