import api from "../axios";

export const fetchAllCities = async () => {
  try {
    const response = await api.get('/city/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching citys:', error);
    throw error;
  }
};

export const createCity = async (roomData) => {
  try {
    const response = await api.post('/city/create', roomData);
    return response.data;
  } catch (error) {
    console.error('Error creating City:', error);
    throw error;
  }
};
