import { useState } from "react";
import { Square } from "./Square.jsx";

function Board() {
  const [player, setPlayer] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]); // Estado para el histórico de jugadas

  function alterPlayer() {
    setPlayer(player === "x" ? "o" : "x");
  }
  function setSquare(index) {
    squares[index] = player;
    setSquares(squares);
    setHistory([...history, { player, position: index }]);
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
    } else if (isEmpate()) {
      alert("Empataron");
    } else {
      return "Turno de: " + player;
    }
  }

  function isEmpate() {
    return !isWinner() && !isMoveAvailable();
  }

  function isMoveAvailable() {
    return squares.includes(null);
  }

  function isWinner() {
    //verticales
    for (var i = 0; i <= 6; i += 3) {
      if (
        squares[i] === squares[i + 1] &&
        squares[i + 1] === squares[i + 2] &&
        squares[i] != null
      ) {
        return true;
      }
    }

    // horizontales
    for (var j = 0; j < 3; j++) {
      if (
        squares[j] === squares[j + 3] &&
        squares[j + 3] === squares[j + 6] &&
        squares[j] != null
      ) {
        return true;
      }
    }

    //diagonales
    if (
      squares[0] === squares[4] &&
      squares[4] === squares[8] &&
      squares[0] != null
    ) {
      return true;
    }

    if (
      squares[2] === squares[4] &&
      squares[4] === squares[6] &&
      squares[2] != null
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
      <h3>Histórico de Jugadas:</h3>
      <ul>
        {history.map((move, index) => (
          <li key={index}>
            Jugador {move.player} jugó en la posición {move.position}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Board;
