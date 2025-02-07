import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'register') {
      onSubmit(name, email, password);
    } else {
      onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {type === 'register' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        {type === 'register' ? 'Register' : 'Login'}
      </button>
    </form>
  );
};

export default AuthForm;