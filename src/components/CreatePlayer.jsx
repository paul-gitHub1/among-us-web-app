import React, { useState } from "react";
import uuid from "uuid";

function CreatePlayer(props) {
  const [player, setPlayer] = useState({
    playerName: "",
    playerColor: "",
    sus: "crew",
    id: uuid(),
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [name]: value,
      };
    });
  }

  return (
    <div className="createPlayer__inputForm">
      <form className="createPlayer-form">
        <input
          onChange={handleChange}
          value={player.playerName}
          name="playerName"
          placeholder="Crew name"
        />

        <select
          className="createPlayer__colorDropdown"
          name="playerColor"
          value={player.playerColor}
          onChange={handleChange}
        >
          <option value="">Choose player color</option>
          <option value="#c51111">Red</option>
          <option value="#132fd2">Blue</option>
          <option value="#127f2d">Green</option>
          <option value="#ed53b9">Pink</option>
          <option value="#ef7d0e">Orange</option>
          <option value="#f3f658">Yellow</option>
          <option value="#3f484e">Black</option>
          <option value="#d5e0ef">White</option>
          <option value="#6b30bc">Purple</option>
          <option value="#72491e">Brown</option>
          <option value="#39fedb">Cyan</option>
          <option value="#50ef3a">Lime</option>
          <option value="#1d9853">Fortegreen</option>
          <option value="#918977">Tan</option>
        </select>
      </form>
      <button
        className="btn-global btn-global--small btn-global--addPlayer"
        onClick={(event) => {
          props.onAdd(player);
          setPlayer({
            playerName: "",
            playerColor: "",
            sus: "crew",
            id: uuid(),
          });
          event.preventDefault();
        }}
      >
        Add player
      </button>
    </div>
  );
}

export default CreatePlayer;
