// src/userService.js

import api from "../axios";

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


//this is for /me endppoint 
export const getUserData = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    try {
      const response = await fetch('http://localhost:8080/api/users/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const userData = await response.json();
        console.log(userData); // Handle your user data
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } else {
    console.log('No token found');
  }
};
