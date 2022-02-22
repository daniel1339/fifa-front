
import "./players.css";
import logo from '../../logo.png';

export default function Players({ players }) {
  return (
    <div className="players">
      {players.map((player) => (
        <div className="card">
        <div className="card-header">
          <img src={logo} alt="jugadores" />
        </div>
        <div className="card-body">
        <h4>{player.name}</h4> <br/>
          
          <p>
            {player.position}
          </p>
          <span>{player.nation}</span>
        </div>
      </div>
      ))}
    </div>
  );
}