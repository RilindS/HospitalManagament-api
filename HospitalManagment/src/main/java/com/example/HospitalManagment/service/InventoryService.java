package com.example.HospitalManagment.service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.example.HospitalManagment.common.ResponseObject;
import com.example.HospitalManagment.data.inventory.CreateInventory;
import com.example.HospitalManagment.data.inventory.ViewInventory;
import com.example.HospitalManagment.entity.Inventory;
import com.example.HospitalManagment.repository.InventoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public CreateInventory createInventory(CreateInventory createInventory) {
        Inventory inventory = new Inventory();
        if(createInventory!=null){
            inventory.setArticle(createInventory.getArticle());
            inventory.setQuantity(createInventory.getQuantity());
            inventory.setDescription(createInventory.getDescription());
            inventory.setTotalPrice(createInventory.getTotalPrice());

            inventoryRepository.save(inventory);
        }
        return createInventory;
    }

    public CreateInventory updateInventory(Long id, CreateInventory createInventory) {

        Inventory inventory = inventoryRepository.findById(id).orElseThrow(() -> new NotFoundException("Inventory not found "));

        inventory.setQuantity(createInventory.getQuantity());
        inventory.setArticle(createInventory.getArticle());
        inventory.setDescription(createInventory.getDescription());
        inventory.setTotalPrice(createInventory.getTotalPrice());

        inventoryRepository.save(inventory);

        return createInventory;
    }

    public Boolean deleteInventory(Long id) {
        Inventory inventory = inventoryRepository.findById(id).orElseThrow(() -> new NotFoundException("Inventory not found "));
        inventory.setDeletedAt(LocalDateTime.now());
        return Boolean.TRUE;
    }
     public ResponseObject getInventory() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewInventory> inventoryList = inventoryRepository.findAllInventory();
        responseObject.setData(inventoryList);
        return responseObject;
     }


}
