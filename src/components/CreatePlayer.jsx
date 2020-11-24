import React, { useState } from "react";
import PlayerColors from "./PlayerColors";
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
          {PlayerColors.map((PlayerColor, index) => {
            return (
              <option
                key={index}
                value={PlayerColor.colorHex}
                disabled={PlayerColor.disabled}
              >
                {PlayerColor.colorName}
              </option>
            );
          })}
        </select>
      </form>
      <button
        className="btn-global btn-global--small btn-global--addPlayer"
        onClick={(event) => {
          props.onAdd(player);

          // reset player selection.
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
