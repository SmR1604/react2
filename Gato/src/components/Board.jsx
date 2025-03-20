import { useState } from "react";
import { Square } from "./Square.jsx";

function Board() {
  const [player, setPlayer] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(null));
  function alterPlayer() {
    setPlayer(player === "x" ? "o" : "x");
  }
  function setSquare(index) {
    squares[index] = player;
    alterPlayer();
    setSquares(squares);
  }
  return (
    <>
      {squares.map((valor, index) => {
        return (
          <Square
            key={index}
            valor={valor}
            onClickPlayer={() => {
              setSquare(index);
            }}
          ></Square>
        );
      })}
    </>
  );
}

export default Board;
