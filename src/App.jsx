import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick }) {
   return (
      <button className="square" onClick={onSquareClick}>
         {value}
      </button>
   );
}

function Board({ xIsNext, squares, onPlay }) {
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

   const winner = calculateWinner(squares);
   let status;

   if (winner) {
      status = 'Winner: ' + winner;
   } else {
      status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
   }

   return (
      <>
         <div className="status">{status}</div>
         <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
         </div>
         <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
         </div>
         <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
         </div>
      </>
   );
}

export default function Game() {
   const [xIsNext, setXIsNext] = useState(true);
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const currentSquares = history[history.length - 1];

   const handlePlay = (nextSquares) => {
      setHistory([...history, nextSquares]);
      setXIsNext(!xIsNext);
   };

   const jumpTo = (nextMove) => {};

   const moves = history.map((squares, move) => {
      let description;

      if (move > 0) {
         description = 'Go to move #' + move;
      } else {
         description = 'Go to game start';
      }

      return (
         <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
         </li>
      );
   });

   return (
      <div className="game">
         <div className="game-board">
            <Board
               xIsNext={xIsNext}
               squares={currentSquares}
               onPlay={handlePlay}
            />
         </div>
         <div className="game-info">
            <ol>{moves}</ol>
         </div>
      </div>
   );
}

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   const winningLine = lines.find(
      ([a, b, c]) =>
         squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
   );

   if (winningLine) {
      return squares[winningLine[0]];
   }
   return null;
}
