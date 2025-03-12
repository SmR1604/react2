import React from "react";
import EventBus from "../../EventBus";

const Emisor = () => {
  const enviarMensaje = () => {
    EventBus.dispatchEvent(
      new CustomEvent("mensaje", { detail: "Hola desde Emisor" })
    );
  };

  return (
    <div>
      <h2>Componente Emisor</h2>
      <button onClick={enviarMensaje}>Enviar Mensaje</button>
    </div>
  );
};

export default Emisor;
