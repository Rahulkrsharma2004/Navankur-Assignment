import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <p className="text-gray-600">Email: {user?.email}</p>
      <p className="text-gray-600">Role: {user?.role}</p>
    </div>
  );
};

export default Dashboard;