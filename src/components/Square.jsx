import React from 'react';

const Square = ({ value, onSquareClick, isHighlighted }) => {
   return (
      <button
         className={`square ${isHighlighted ? `highlight` : ``}`}
         onClick={onSquareClick}
      >
         {value}
      </button>
   );
};

export default Square;
