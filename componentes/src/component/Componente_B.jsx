import React, { useEffect, useState } from "react";
import EventBus from "../EventBus";

const Receptor = () => {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const manejarEvento = (e) => {
      setMensaje(e.detail);
    };

    EventBus.addEventListener("mensaje", manejarEvento);

    return () => {
      EventBus.removeEventListener("mensaje", manejarEvento);
    };
  });

  return (
    <div>
      <h2>Componente Receptor</h2>
      <h1>{mensaje}</h1>
    </div>
  );
};

export default Receptor;
