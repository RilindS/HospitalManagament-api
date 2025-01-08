import api from "../axios";


export const createAppointment = async (appointmentData) => {
  try {
    const response = await api.post('/appointment/create', appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};
