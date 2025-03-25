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
    setSquares(squares);
    const state = checkEndGame();

    if (state == "WINNER") {
      console.log("Ganador: " + player);
    } else if (state == "DRAW") {
      console.log("Empate");
    }
    alterPlayer();
  }

  function checkEndGame() {
    if (isWinner()) {
      return "Winner: " + player;
    }
    if (isEmpate()) {
      return "Empate";
    }
    return "Turno de: " + player;
  }

  function isEmpate() {
    return !isWinner() && !isMoveAvailable();
  }

  function isMoveAvailable() {
    return squares.includes(null);
  }

  function isWinner() {
    for (var i = 0; i <= 6; i += 3) {
      //verticales
      if (
        squares[i] == squares[i + 1] &&
        squares[i + 1] == squares[i + 2] &&
        squares[i] != null
      ) {
        return true;
      }
    }
    for (var j = 0; j < 3; j++) {
      //horizontales
      if (
        squares[j] == squares[j + 3] &&
        squares[j + 3] == squares[j + 6] &&
        squares[j] != null
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <>
      <h2>Turno de {player}</h2>

      {squares.map((valor, index) => {
        return (
          <>
            <Square
              key={index}
              valor={valor}
              onClickPlayer={() => {
                setSquare(index);
              }}
            ></Square>
            {index % 3 === 2 ? <br /> : ""}
          </>
        );
      })}
    </>
  );
}

export default Board;
