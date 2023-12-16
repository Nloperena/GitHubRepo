import React from 'react';
import Square from './Square.js';  // Make sure this import statement is correct

const Board = ({ squares, onClick }) => (
  <div style={{ display: 'grid', gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)', gap: '10px' }}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
