import React from 'react';

const Square = ({ value, onClick }) => (
  <button style={{ fontSize: '30px', fontWeight: 'bold', cursor: 'pointer', outline: 'none' }} onClick={onClick}>
    {value}
  </button>
);

export default Square;
