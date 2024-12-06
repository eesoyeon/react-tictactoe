import React from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';

const GameBoard = ({ xIsNext, squares, onPlay }) => {
   const handleClick = (i) => {
      if (squares[i] || calculateWinner(squares)) {
         return;
      }

      const nextSqaures = squares.slice();
      if (xIsNext) {
         nextSqaures[i] = 'X';
      } else {
         nextSqaures[i] = 'O';
      }
      onPlay(nextSqaures);
   };

   const winningLine = calculateWinner(squares);
   let status;

   // console.log(squares);
   // winningLine이 없고, squares에 null 값이 없다면, 무승부
   if (winningLine) {
      status = 'Winner: ' + squares[winningLine[0]];
   } else if (squares.includes(null)) {
      status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
   } else {
      status = 'No Winner!';
   }

   return (
      <>
         {Array(3)
            .fill(null)
            .map((_, rowIndex) => (
               <div className="board-row" key={rowIndex}>
                  {Array(3)
                     .fill(null)
                     .map((_, columnIndex) => {
                        const squareIndex = rowIndex * 3 + columnIndex;
                        const isHighlighted =
                           winningLine?.includes(squareIndex);

                        return (
                           <Square
                              key={squareIndex}
                              value={squares[squareIndex]}
                              onSquareClick={() => handleClick(squareIndex)}
                              isHighlighted={isHighlighted}
                           />
                        );
                     })}
               </div>
            ))}
         <h2 className="status">{status}</h2>
      </>
   );
};

export default GameBoard;
