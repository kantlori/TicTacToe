import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Calculater";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [colorStates, setColorStates] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isNext ? "X" : "O";
    setSquares(nextSquares);
    setIsNext(!isNext);

    const nextColors = colorStates.slice();
    nextColors[index] = true;
    setColorStates(nextColors);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            className={colorStates[index] ? (value === "X" ? "x" : "o") : ""}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          <Square
            key={index + 3}
            value={value}
            onClick={() => handleClick(index + 3)}
            className={colorStates[index + 3] ? (value === "X" ? "x" : "o") : ""}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((value, index) => (
          <Square
            key={index + 6}
            value={value}
            onClick={() => handleClick(index + 6)}
            className={colorStates[index + 6] ? (value === "X" ? "x" : "o") : ""}
          />
        ))}
      </div>
      <button
        className="reset"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsNext(true);
          setColorStates(Array(9).fill(false));
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;
