import api from "../../axios";

export const createRoom = async (roomData) => {
    try {
      const response = await api.post('/room/create', roomData);
      return response.data;
    } catch (error) {
      console.error('Error creating room:', error);
      throw error;
    }
  };
  