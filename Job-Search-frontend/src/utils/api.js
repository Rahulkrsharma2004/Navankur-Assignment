import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Fetch all jobs
export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

// Fetch a single job by ID
export const fetchJobById = async (id) => {
  const response = await axios.get(`${API_URL}/jobs/${id}`);
  return response.data;
};

// Login user
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

// Register user
export const registerUser = async (name, email, password, role) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
    role,
  });
  return response.data;
};