import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import JobDetails from './pages/JobDetails';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;