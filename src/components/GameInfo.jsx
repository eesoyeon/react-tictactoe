import React from 'react';
import Button from './Button';

const GameInfo = ({ history, setCurrentMove, sort }) => {
   const jumpTo = (nextMove) => {
      setCurrentMove(nextMove);
   };

   const moves = history.map((squares, move) => {
      let description;

      if (move > 0) {
         description = 'Go to move #' + move;
      } else {
         description = 'Go to game start';
      }

      return (
         <li key={move}>
            <Button variant="history" onClick={() => jumpTo(move)}>
               {description}
            </Button>
         </li>
      );
   });

   return (
      <>
         <ol>{sort === 'ascending' ? moves : moves.reverse()}</ol>
      </>
   );
};

export default GameInfo;
