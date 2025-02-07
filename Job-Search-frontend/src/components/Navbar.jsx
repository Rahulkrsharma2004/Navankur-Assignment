import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Job Platform
        </Link>
        <div>
          {user ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;