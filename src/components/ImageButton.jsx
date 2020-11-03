import React from "react";

function ImageButton(props) {
  return (
    <button
      className="amongUs-img"
      onClick={(e) => {
        props.handleDisplay(e);
      }}
    >
      {props.mapName}
      <img
        className="amongUs-img--hidden"
        src={props.mapImage}
        alt={props.mapName}
      />
    </button>
  );
}

export default ImageButton;
