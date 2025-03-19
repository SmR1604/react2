import Square from "./Square.jsx";
import { useState } from "react";

function Board() {
  const [turno, setTurno] = useState("X");
  const [xo1, setXo1] = useState("");
  const [xo2, setXo2] = useState("");
  const [xo3, setXo3] = useState("");
  const [xo4, setXo4] = useState("");
  const [xo5, setXo5] = useState("");
  const [xo6, setXo6] = useState("");
  const handleClick1 = () => {
    if (xo1 === "") {
      setXo1(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  const handleClick2 = () => {
    if (xo2 === "") {
      setXo2(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  const handleClick3 = () => {
    if (xo3 === "") {
      setXo3(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  const handleClick4 = () => {
    if (xo4 === "") {
      setXo4(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  const handleClick5 = () => {
    if (xo5 === "") {
      setXo5(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  const handleClick6 = () => {
    if (xo6 === "") {
      setXo6(turno);
      setTurno(turno === "X" ? "O" : "X");
    }
  };
  return (
    <div className="board">
      <Square xo={xo1} onClick={handleClick1}></Square>
      <Square xo={xo2} onClick={handleClick2}></Square>
      <Square xo={xo3} onClick={handleClick3}></Square>
      <Square xo={xo4} onClick={handleClick4}></Square>
      <Square xo={xo5} onClick={handleClick5}></Square>
      <Square xo={xo6} onClick={handleClick6}></Square>
      <h1>El turno actual es de : {turno}</h1>
    </div>
  );
}

export default Board;
