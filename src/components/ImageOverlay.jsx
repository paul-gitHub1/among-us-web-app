import React from "react";

function ImageOverlay(props) {
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button
          className="close"
          onClick={() => {
            props.handleClose();
          }}
        >
          × Close
        </button>
        <img src={props.image} className="overlay--image" />
      </div>
    </div>
  );
}

export default ImageOverlay;
