function Comp1({ titulo, parametro2, funcionMensajePadre }) {
  return (
    <>
      <h1>{titulo}</h1>
      <h1>{parametro2}</h1>
      <button onClick={funcionMensajePadre}>Mensaje padre</button>
    </>
  );
}
export default Comp1;
