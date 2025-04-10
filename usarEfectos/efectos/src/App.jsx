import { useState } from "react";
import ExampleCounter from "./components/ExampleCounter";

function ParentComponent() {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  const handleStart = () => setStart(true);
  const handleReset = () => setReset(true);

  return (
    <div>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleReset}>Turno</button>
      <ExampleCounter
        initialValue={10}
        timeOut={() => alert("Perdiste el juego")}
        start={start}
        reset={reset}
        onResetHandled={() => setReset(false)}
        onStop={() => setStart(false)}
      />
    </div>
  );
}

export default ParentComponent;
