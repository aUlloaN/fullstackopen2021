import React from 'react';

const Filter = ({ text, handleChange }) => {
  return (
    <div>
      find countries: <input value={text} onChange={handleChange} />
    </div>
  );
};

export default Filter;
