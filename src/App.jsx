import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameInfo from './components/GameInfo';
import { useSort } from './hooks/useSort';
import { useGameState } from './hooks/useGameState';
import Button from './components/Button';

export default function Game() {
   const {
      history,
      currentMove,
      xIsNext,
      currentSquares,
      handlePlay,
      setCurrentMove,
   } = useGameState();

   const [sort, handleToggle] = useSort();

   return (
      <>
         <div className="game">
            <div className="game-description">
               <h1 className="game-title">Tic Tac Toe </h1>
               <p>가로 세로 대각선 중 3개가 먼저 이어지는 플레이어가 WIN!</p>
            </div>
            <div className="game-board">
               <GameBoard
                  xIsNext={xIsNext}
                  squares={currentSquares}
                  onPlay={handlePlay}
               />
            </div>
            <div className="game-info">
               <GameInfo
                  history={history}
                  setCurrentMove={setCurrentMove}
                  sort={sort}
               />
               <Button variant="toggle" onClick={() => handleToggle()}>
                  Sort: {sort}
               </Button>
            </div>
         </div>
      </>
   );
}
