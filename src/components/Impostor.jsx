import React from "react";
import PlayerIcons from "./playerIcons/PlayerIcons.jsx";
import PlayerAvatar from "./playerIcons/PlayerAvatar.jsx";

function Impostor(props) {
  return (
    <div className="playerCard">
      <div className="playerCard__avatar">
        <PlayerAvatar fill={props.color} name={props.name} />
      </div>
      <div className="playerCard-navigation">
        <h1 className="playerCard__playerName">{props.name}</h1>
        <button
          className="playerCard__button"
          onClick={() => {
            props.onCrew(props.id);
          }}
        >
          <PlayerIcons name="Crew" width={35} height={35} />
        </button>
        <button
          className="playerCard__button"
          onClick={() => {
            props.onSuspect(props.id);
          }}
        >
          <PlayerIcons name="Suspect" width={25} height={25} />
        </button>
        <button
          className="playerCard__button"
          onClick={() => {
            props.onKilled(props.id);
          }}
        >
          <PlayerIcons name="Killed" width={25} height={25} />
        </button>
      </div>
      <button
        className="playerCard__button playerCard__button--delete"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <PlayerIcons
          name="Delete player"
          width={10}
          height={10}
          fill="#b5b3b3"
        />
      </button>
    </div>
  );
}

export default Impostor;
