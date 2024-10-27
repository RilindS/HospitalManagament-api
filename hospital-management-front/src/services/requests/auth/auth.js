// src/userService.js

import api from "../../axios";

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/create', userData);
    return response.data; 
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/auth', loginData);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
