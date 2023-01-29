import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: any) => {
    const newSquares = [...squares];
    if (newSquares[index] || calculateWinner(newSquares)) {
      return;
    }
    newSquares[index] = isXNext ? "Heis" : "Asya";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares: any) => {
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
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index: any) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {squares[index]}
      </button>
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw";
  } else {
    status = `Next player: ${isXNext ? "Heis" : "Asya"}`;
  }

  return (
    <div className="wrapper">
      <div className="hicandice">Hi, Candice!</div>
      <div className="hicandice">
        There is a "Tic-tac-toe" with Heis and Asya
      </div>

      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
