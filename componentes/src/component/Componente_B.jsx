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
      <p>Mensaje recibido: {mensaje}</p>
    </div>
  );
};

export default Receptor;
