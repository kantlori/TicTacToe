import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Calculater";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isnext, setIsNext] = useState(true);
  const [colorStates, setColorStates] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isnext ? "X" : "O";
    setSquares(nextSquares);
    setIsNext(!isnext);

    const nextColors = colorStates.slice();
    nextColors[index] = true; // Bu kareye renk değişikliği uygula
    setColorStates(nextColors);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isnext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            className={colorStates[index] ? "change" : ""}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          <Square
            key={index + 3}
            value={value}
            onClick={() => handleClick(index + 3)}
            className={colorStates[index + 3] ? "change" : ""}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((value, index) => (
          <Square
            key={index + 6}
            value={value}
            onClick={() => handleClick(index + 6)}
            className={colorStates[index + 6] ? "change" : ""}
          />
        ))}
      </div>
      <button
        className="reset"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsNext(true);
          setColorStates(Array(9).fill(false)); // Renk durumlarını sıfırla
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;
