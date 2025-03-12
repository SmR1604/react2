import React from "react";
import useSharedState from "./ui/Componente_C";
const ComponentD = () => {
  const { state } = useSharedState();
  return <p>{state}</p>;
};

export default ComponentD;
