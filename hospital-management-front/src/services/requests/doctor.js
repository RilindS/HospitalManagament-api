import api from "../axios";

export const createDoctor = async (doctorData) => {
    try {
      const response = await api.post('/doctor/create', doctorData);
      return response.data;
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error;
    }
  };
  