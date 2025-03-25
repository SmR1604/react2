export function Square({ valor, onClickPlayer }) {
  const handleClick = () => {
    if (valor === null) {
      onClickPlayer();
    }
  };

  return <button onClick={handleClick}> {valor}</button>;
}
