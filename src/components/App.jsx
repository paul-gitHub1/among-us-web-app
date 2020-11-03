import React, { useState } from "react";
import "../sass/_main.scss";
import Footer from "./Footer";
import Crew from "./Crew";
import CreatePlayer from "./CreatePlayer";
import ImageButton from "./ImageButton";
import ImageOverlay from "./ImageOverlay";
import Suspects from "./Suspects";
import Impostor from "./Impostor";
import Killed from "./Killed";

function App() {
  const [crew, setCrew] = useState([]);
  const [suspects, setSuspects] = useState([]);
  const [impostors, setImpostors] = useState([]);
  const [killed, setKilled] = useState([]);

  const deleteNow = function (prevPlayers, id) {
    return prevPlayers.filter((playerItem) => {
      return playerItem.id !== id;
    });
  };

  // Delete all players
  function deleteAll() {
    setCrew([]);
    setSuspects([]);
    setImpostors([]);
    setKilled([]);
  }

  // Reset all players back to crew
  function nextRound() {
    let resetSuspects = suspects.filter((playerItem) => {
      return playerItem.sus === "Suspect";
    });

    let resetImpostors = impostors.filter((playerItem) => {
      return playerItem.sus === "Impostor";
    });

    let resetKilled = killed.filter((playerItem) => {
      return playerItem.sus === "Killed";
    });

    setSuspects((prevPlayers) => {
      return prevPlayers.filter((playerItem) => {
        return playerItem.sus !== "Suspect";
      });
    });

    setImpostors((prevPlayers) => {
      return prevPlayers.filter((playerItem) => {
        return playerItem.sus !== "Impostor";
      });
    });

    setKilled((prevPlayers) => {
      return prevPlayers.filter((playerItem) => {
        return playerItem.sus !== "Killed";
      });
    });

    setCrew((prevPlayers) => {
      return [
        ...prevPlayers,
        ...resetSuspects,
        ...resetImpostors,
        ...resetKilled,
      ];
    });
  }

  // Add player.
  function addPlayer(player) {
    if (player.playerColor !== "" && player.playerName !== "") {
      setCrew((prevPlayers) => {
        return [...prevPlayers, player];
      });
    } else if (player.playerColor === "" && player.playerName !== "") {
      alert("Please choose player color!");
    } else if (player.playerColor !== "" && player.playerName === "") {
      alert("Please choose player name!");
    } else {
      alert("Please enter player name and choose player color!");
    }
  }

  // Add Suspect from CREW
  function addSuspect(id) {
    let newArr = crew.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Suspect";
    console.log(newArr[0].sus);
    console.log(newArr[0]);
    setSuspects((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setCrew((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Impostor from CREW.
  function addImpostor(id) {
    let newArr = crew.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Impostor";

    setImpostors((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setCrew((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Killed from CREW
  function addKilled(id) {
    let newArr = crew.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Killed";

    setKilled((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setCrew((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Crew from SUSPECTS
  function addCrewSuspect(id) {
    let newArr = suspects.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Crew";
    console.log(newArr[0].sus);
    setCrew((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setSuspects((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Impostor from SUSPECTS
  function addImpostorSuspect(id) {
    let newArr = suspects.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Impostor";

    setImpostors((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setSuspects((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add killed from SUSPECTS
  function addKilledSuspect(id) {
    let newArr = suspects.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Killed";

    setKilled((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setSuspects((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Crew from IMPOSTORS
  function addCrewImpostor(id) {
    let newArr = impostors.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Crew";

    setCrew((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setImpostors((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Suspect from IMPOSTORS
  function addSuspectImpostor(id) {
    let newArr = impostors.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Suspect";

    setSuspects((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setImpostors((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Killed from IMPOSTORS
  function addKilledImpostor(id) {
    let newArr = impostors.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Killed";

    setKilled((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setImpostors((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Crew from KILLED
  function addCrewKilled(id) {
    let newArr = killed.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Crew";

    setCrew((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setKilled((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Suspect from KILLED
  function addSuspectKilled(id) {
    let newArr = killed.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Suspect";

    setSuspects((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setKilled((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Add Impostor from KILLED
  function addImpostorKilled(id) {
    let newArr = killed.filter((playerItem) => {
      return playerItem.id === id;
    });

    newArr[0].sus = "Impostor";

    setImpostors((prev) => {
      return [...prev, newArr[0]];
    });

    // Delete player from game
    setKilled((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  // Delete player.
  function deletePlayer(id) {
    setCrew((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  function deleteSuspect(id) {
    setSuspects((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  function deleteImpostor(id) {
    setImpostors((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  function deleteKilled(id) {
    setKilled((prevPlayers) => {
      return deleteNow(prevPlayers, id);
    });
  }

  function displayImage() {
    console.log("Clicked");
  }

  return (
    <div>
      <div className="side-element side-element--top side-element--horizontal side-element--1">
        <h1 className="side-element-heading">Among us notepad 3.0 </h1>
        <ImageOverlay />
        <ImageButton
          mapName={"Mira"}
          mapImage={"img/mira.png"}
          display={displayImage}
        />
        <ImageButton mapName={"Polus"} mapImage={"img/polus.png"} />
        <ImageButton mapName={"Skeld"} mapImage={"img/skeld.png"} />
      </div>
      <div className="side-element side-element--right side-element--vertical side-element--2"></div>
      <div className="side-element side-element--bottom side-element--horizontal side-element--3"></div>
      <div className="side-element side-element--left side-element--vertical side-element--4"></div>

      <div className="createPlayer">
        <CreatePlayer onAdd={addPlayer} />
        <div className="createPlayer__secondaryButtons">
          <button
            className="btn-global btn-global--small btn-global--newadd"
            onClick={nextRound}
          >
            New round
          </button>
          <button
            className="btn-global btn-global--small btn-global--newadd"
            onClick={deleteAll}
          >
            Delete all players
          </button>
        </div>
      </div>
      <div className="notePad">
        <div className="notePad__item notePad__item--1">
          <h1 className="heading-section">Crew</h1>
          {crew.map((crew, index) => {
            return (
              <Crew
                key={crew.id}
                id={crew.id}
                name={crew.playerName}
                color={crew.playerColor}
                onDelete={deletePlayer}
                onSuspect={addSuspect}
                onImpostor={addImpostor}
                onKilled={addKilled}
              />
            );
          })}
        </div>
        <div className="notePad__item notePad__item--2">
          <h1 className="heading-section">Suspects</h1>
          {suspects.map((suspect, index) => {
            return (
              <Suspects
                key={suspect.id}
                id={suspect.id}
                name={suspect.playerName}
                color={suspect.playerColor}
                onDelete={deleteSuspect}
                onCrew={addCrewSuspect}
                onImpostor={addImpostorSuspect}
                onKilled={addKilledSuspect}
              />
            );
          })}
        </div>
        <div className="notePad__item notePad__item--3">
          <h1 className="heading-section">Impostors</h1>
          {impostors.map((impostor, index) => {
            return (
              <Impostor
                key={impostor.id}
                id={impostor.id}
                name={impostor.playerName}
                color={impostor.playerColor}
                onDelete={deleteImpostor}
                onCrew={addCrewImpostor}
                onSuspect={addSuspectImpostor}
                onKilled={addKilledImpostor}
              />
            );
          })}
        </div>

        <div className="notePad__item notePad__item--4">
          <h1 className="heading-section">Killed</h1>
          {killed.map((killed, index) => {
            return (
              <Killed
                key={killed.id}
                id={killed.id}
                name={killed.playerName}
                color={killed.playerColor}
                onDelete={deleteKilled}
                onCrew={addCrewKilled}
                onSuspect={addSuspectKilled}
                onImpostor={addImpostorKilled}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
