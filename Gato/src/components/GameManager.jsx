import { useState } from "react";
import Board from "./Board";
import CounterManager from "./CounterManager";

function GameManager() {
  const [playerNames, setPlayerNames] = useState({ x: "", o: "" });
  const [player, setPlayer] = useState("x");
  const [ready, setReady] = useState(false);

  // contador
  const [startCounter, setStartCounter] = useState(false);
  const [resetCounter, setResetCounter] = useState(false);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setPlayerNames({ ...playerNames, [name]: value });
  };

  const startGame = () => {
    if (playerNames.x && playerNames.o) {
      setReady(true);
      setStartCounter(true); //inicio
      setResetCounter(true); //reinicio
    } else {
      alert("Por favor, ingresa los nombres de ambos jugadores.");
    }
  };

  const handleTurnChange = () => {
    setPlayer((prev) => (prev === "x" ? "o" : "x"));
    setResetCounter(true); // reinicio por turno
  };

  const handleTimeout = () => {
    alert(`¡Tiempo agotado para ${playerNames[player]} (${player})!`);
    setStartCounter(false);
  };

  const handleResetHandled = () => {
    setResetCounter(false);
  };

  if (!ready) {
    return (
      <div>
        <h2>Ingresa los nombres de los jugadores</h2>
        <input
          type="text"
          name="x"
          placeholder="Nombre del Jugador X"
          value={playerNames.x}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="o"
          placeholder="Nombre del Jugador O"
          value={playerNames.o}
          onChange={handleNameChange}
        />
        <br />
        <button onClick={startGame}>Comenzar partida</button>
      </div>
    );
  }

  return (
    <>
      <CounterManager
        start={startCounter}
        reset={resetCounter}
        onResetHandled={handleResetHandled}
        onTimeout={handleTimeout}
      />
      <Board
        player={player}
        onTurnChange={handleTurnChange}
        playerNames={playerNames}
      />
    </>
  );
}

export default GameManager;
