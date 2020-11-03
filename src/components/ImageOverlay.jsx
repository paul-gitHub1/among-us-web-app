import React from "react";

function ImageOverlay(props) {
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close">× Close</button>
        <img className="overlay--image" />
      </div>
    </div>
  );
}

export default ImageOverlay;
