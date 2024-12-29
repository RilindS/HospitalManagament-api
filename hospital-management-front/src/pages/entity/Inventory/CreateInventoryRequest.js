import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../services/requests/auth';
import { createInventoryRequest, deleteInventory, fetchAllInventory } from '../../../services/requests/inventoryRequest';

const CreateInventoryRequest = () => {
  const [inventorys, setInventotys] = useState([]); // Ensure it's always an array
  const [selectedInventory, setSelectedInventory] = useState(null); // To store selected inventory
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Function to fetch all inventory and user data
    const fetchData = async () => {
      try {
        // Fetch inventory
        const inventoryResponse = await fetchAllInventory();
        setInventotys(inventoryResponse); // Directly set the response, no need to access .data

        // Fetch user data
        const userResponse = await getUserData();
        if (userResponse) {
          setUserData(userResponse);  // Set the user data in state
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  // Call the function to fetch both data on component mount
  }, []);

  // Handle edit inventory item
  const handleEdit = (inventoryId) => {
    navigate(`/admin/inventory/edit/${inventoryId}`);
  };

  // Handle delete inventory item
  const handleDelete = async (inventoryId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this inventory item?');
    if (confirmDelete) {
      try {
        await deleteInventory(inventoryId);
        // Refresh the inventory list after deleting
        const updatedInventory = inventorys.filter(item => item.id !== inventoryId);
        setInventotys(updatedInventory);
      } catch (error) {
        console.error('Error deleting inventory:', error);
      }
    }
  };

  // Handle selecting an inventory item
  const handleSelectInventory = (inventory) => {
    setSelectedInventory(inventory); // Set the selected inventory item
  };

  // Handle creating an inventory request
  const handleCreateInventoryRequest = async () => {
    if (!selectedInventory) {
      alert('Please select an inventory item.');
      return;
    }

    if (!userData) {
      alert('User data is not available.');
      return;
    }

    const inventoryRequestData = {
      inventoryId: selectedInventory.id,
      quantityRequested: 1, // This can be adjusted as needed
      // Pass user ID (doctor or nurse) based on userData
      doctorId: userData.roles.includes('DOCTOR') ? userData.id : null,
      nurseId: userData.roles.includes('NURSE') ? userData.id : null,
    };

    try {
      await createInventoryRequest(inventoryRequestData); // Call the API to create the request
      alert('Inventory request created successfully!');
      setSelectedInventory(null); // Reset selected inventory after request is made
    } catch (error) {
      console.error('Error creating inventory request:', error);
    }
  };

  return (
    <div className="show-doctor">
      <h2>All Inventory</h2>
      <button className="add-button" onClick={() => navigate("/admin/inventory/add")}>
        Add Inventory
      </button>
      
      {/* You can use userData here */}
      {userData && (
        <div>
          <h3>Welcome, {userData.firstName} {userData.lastName}</h3>
        </div>
      )}

      {/* Conditional rendering to prevent error if inventorys is empty or undefined */}
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add a check to ensure inventorys is an array */}
          {Array.isArray(inventorys) && inventorys.length > 0 ? (
            inventorys.map((inventory, index) => (
              <tr key={index}>
                <td>{inventory.article}</td>
                <td>{inventory.description}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.totalPrice}</td>
                <td>
                  <button onClick={() => handleEdit(inventory.id)}>Edit</button>
                  <button onClick={() => handleDelete(inventory.id)}>Delete</button>
                  <button onClick={() => handleSelectInventory(inventory)}>Select</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No inventory items available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Button to create inventory request */}
      {selectedInventory && (
        <div>
          <h4>Selected Inventory: {selectedInventory.article}</h4>
          <button onClick={handleCreateInventoryRequest}>
            Create Inventory Request
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateInventoryRequest;
