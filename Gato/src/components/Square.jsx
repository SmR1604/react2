import React from "react";

export default function Square({ xo, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {xo}
    </button>
  );
}
