import api from "../axios";

export const fetchAllInventory = async () => {
  try {
    const response = await api.get('/inventory/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching citys:', error);
    throw error;
  }
};

export const createInventory = async (inventoryData) => {
  try {
    const response = await api.post('/inventory/create', inventoryData);
    return response.data;
  } catch (error) {
    console.error('Error creating inventory:', error);
    throw error;
  }
};
