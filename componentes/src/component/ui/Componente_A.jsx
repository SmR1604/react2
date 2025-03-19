import React from "react";
import EventBus from "../../EventBus";

const Emisor = () => {
  const enviarMensaje = () => {
    EventBus.dispatchEvent(
      new CustomEvent("mensaje", {
        detail: "Este es el mensaje desde el Emisor",
      })
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
