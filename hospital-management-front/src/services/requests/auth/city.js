import api from "../../axios";

export const createCity = async (roomData) => {
    try {
      const response = await api.post('/city/create', roomData);
      return response.data;
    } catch (error) {
      console.error('Error creating City:', error);
      throw error;
    }
  };
  