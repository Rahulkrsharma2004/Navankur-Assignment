import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

export const fetchJobById = async (id) => {
  const response = await axios.get(`${API_URL}/jobs/${id}`);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const registerUser = async (name, email, password, role) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
    role,
  });
  return response.data;
};