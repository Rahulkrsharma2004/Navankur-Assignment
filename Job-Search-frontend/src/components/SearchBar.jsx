import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;