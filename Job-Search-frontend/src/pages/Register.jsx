import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (name, email, password) => {
    await register(name, email, password, 'jobSeeker'); // Default role: jobSeeker
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <AuthForm type="register" onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;