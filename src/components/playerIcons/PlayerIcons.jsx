import React from "react";

import IconCrew from "./IconCrew.jsx";
import IconDelete from "./IconDelete.jsx";
import IconImpostor from "./IconImpostor.jsx";
import IconKilled from "./IconKilled.jsx";
import IconSuspect from "./IconSuspect.jsx";

function PlayerIcons(props) {
  switch (props.name) {
    case "Crew":
      return <IconCrew {...props} />;
    case "Delete player":
      return <IconDelete {...props} />;
    case "Impostor":
      return <IconImpostor {...props} />;
    case "Killed":
      return <IconKilled {...props} />;
    case "Suspect":
      return <IconSuspect {...props} />;
    default:
      return;
  }
}

export default PlayerIcons;
