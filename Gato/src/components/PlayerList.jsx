function PlayerList({ players }) {
  return (
    <div>
      <h3>Jugadores:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
export default PlayerList;
