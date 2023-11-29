import React from 'react';
import { useState } from 'react';
import './addItem.css';

function AddItem({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="add">
      <input
        type="text"
        class="add-input"
        placeholder="recherche"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button id="add-btn" onClick={() => onSearch(searchValue)}>
        Chercher
      </button>
    </div>
  );
}

export default AddItem;
