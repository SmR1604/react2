import { useState } from "react";
import { Square } from "./Square.jsx";
// import PlayerList from "./PlayerList.jsx";
function Board() {
  const [player, setPlayer] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const players = ["Jugador 1", "Jugador 2"];
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
      alert("Ganador: " + player);
      return "WINNER";
      // return "Winner: " + player;
    }
    if (isEmpate()) {
      alert("Empate");
      return "DRAW";
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
    if (
      //diagonales
      squares[0] === squares[4] &&
      squares[4] === squares[8] &&
      squares[0] !== null
    ) {
      return true;
    }
    if (
      squares[2] === squares[4] &&
      squares[4] === squares[6] &&
      squares[2] !== null
    ) {
      return true;
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
