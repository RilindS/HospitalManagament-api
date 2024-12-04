import api from "../axios";

export const createNurse = async (nurseData) => {
    try {
      const response = await api.post('/nurse/create', nurseData);
      return response.data;
    } catch (error) {
      console.error('Error creating nurse:', error);
      throw error;
    }
  };
export const fetchAllNurses = async () => {
    try {
        const response = await api.get('/nurse/all');
        console.log('response',response)
        return response.data;
    } catch (error) {
        console.error('Error fetching nurses:', error);
        throw error;
    }
};

export const fetchAllRooms = async () => {
  const response = await fetch('/api/rooms');
  if (!response.ok) {
    throw new Error('Failed to fetch rooms');
  }
  return response.json();
};

  