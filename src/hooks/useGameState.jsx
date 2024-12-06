import { useState } from 'react';

export const useGameState = () => {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [currentMove, setCurrentMove] = useState(0);

   const xIsNext = currentMove % 2 === 0;
   const currentSquares = history[currentMove];

   const handlePlay = (nextSquares) => {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
   };

   return {
      history,
      currentMove,
      xIsNext,
      currentSquares,
      handlePlay,
      setCurrentMove,
   };
};
