import { React, useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const calcularSuma = () => {
    setResultado(Number(num1) + Number(num2));
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button onClick={calcularSuma}>Sumar</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;
