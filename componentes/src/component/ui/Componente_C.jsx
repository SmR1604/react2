import React, { useState } from "react";

const useSharedState = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};

const ComponentC = () => {
  const { setState } = useSharedState();
  return <button onClick={() => setState("hola")}>Enviar</button>;
};

export default ComponentC;
