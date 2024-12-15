import React from 'react';
import { useState } from 'react';
import Square from './Square';
import calculateWinner from './Calculater';



function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isnext, setIsNext] = useState(true)

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice()
    nextSquares[index] = isnext ? "X" : "O";
    setSquares(nextSquares)
    setIsNext(!isnext)

  }

  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : `Next player: ${isnext ? "X" : "O"}`

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          <Square
            key={index + 3}
            value={value}
            onClick={() => handleClick(index + 3)}
          />))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((value, index) => (
          <Square
            key={index + 6}
            value={value}
            onClick={() => handleClick(index + 6)}
          />))}
      </div>
      <button
        className='reset'
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsNext(true);
        }}
      >
        Reset
      </button>

    </div>
  )

}


export default Board