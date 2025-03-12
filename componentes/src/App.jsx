/*
import Comp2 from "./component/Comp2";
import Comp1 from "./component/ui/Comp1";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("valor inicial");

  const fun = () => {
    console.log("hola");
    setMsg("mensaje desde el padre");
  };
  return (
    <>
      <h1>{msg}</h1>
      <Comp1 titulo={msg} funcionMensajePadre={fun}></Comp1>
      <Comp2 titulo="componente 2" mensaje={msg}></Comp2>
    </>
  );
}

export default App;
*/
import React from "react";
import Emisor from "./component/ui/Componente_A";
import Receptor from "./component/Componente_B";

const App = () => {
  return (
    <div>
      <h1>Comunicación con EventBus</h1>
      <Emisor />
      <Receptor />
    </div>
  );
};

export default App;
/*
import React from "react";
import ComponentC from "./component/ui/Componente_C";
import ComponentD from "./component/Componente_D";

const App = () => {
  return (
    <div>
      <h1>Comunicación con Custom Hook</h1>
      <ComponentC></ComponentC>
      <ComponentD></ComponentD>
    </div>
  );
};
export default App;
*/
