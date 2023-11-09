import React, { useState } from 'react';

function CharacterSearch({ onSearch }) {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    onSearch(searchId);
  };

  return (
    <div className=' text-center bg-secondary h-150 ' >
      <input
      
        type="text"
        placeholder="ID del personaje"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button
       onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default CharacterSearch;
