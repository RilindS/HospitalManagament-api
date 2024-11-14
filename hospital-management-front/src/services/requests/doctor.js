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
export const fetchAllDoctors = async () => {
    try {
        const response = await api.get('/doctor/all');
        console.log('response',response)
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
    }
};

  