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

