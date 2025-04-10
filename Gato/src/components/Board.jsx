import { useState } from "react";
import { Square } from "./Square.jsx";

function Board({ player, onTurnChange, playerNames }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);

  function setSquare(index) {
    // Prevenir sobreescritura
    if (squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = player;
    setSquares(newSquares);
    setHistory([...history, { player, position: index }]);

    const state = checkEndGame(newSquares);

    if (state == "WINNER") {
      console.log("Ganador: " + player);
    } else if (state == "DRAW") {
      console.log("Empate");
    } else {
      onTurnChange(); // Solo cambia turno si no se terminó el juego
    }
  }

  function checkEndGame(squares) {
    if (isWinner(squares)) {
      alert("Ganador: " + playerNames[player]);
      return "WINNER";
    } else if (isEmpate(squares)) {
      alert("Empataron");
      return "DRAW";
    }
    return "CONTINUE";
  }

  function isEmpate(squares) {
    return !isWinner(squares) && !squares.includes(null);
  }

  function isWinner(squares) {
    // verticales
    for (let i = 0; i <= 6; i += 3) {
      if (
        squares[i] === squares[i + 1] &&
        squares[i + 1] === squares[i + 2] &&
        squares[i] != null
      ) {
        return true;
      }
    }

    // horizontales
    for (let j = 0; j < 3; j++) {
      if (
        squares[j] === squares[j + 3] &&
        squares[j + 3] === squares[j + 6] &&
        squares[j] != null
      ) {
        return true;
      }
    }

    // diagonales
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

      {squares.map((valor, index) => (
        <>
          <Square
            key={index}
            valor={valor}
            onClickPlayer={() => setSquare(index)}
          />
          {index % 3 === 2 ? <br /> : ""}
        </>
      ))}

      <h3>Histórico de Jugadas:</h3>
      <ul>
        {history.map((move, index) => (
          <li key={index}>
            Jugador {playerNames} jugó en la posición {move.position}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Board;
