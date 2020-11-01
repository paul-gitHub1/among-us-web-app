import React from "react";

const IconCrew = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "0 0 50 50",
  width = "100%",
  className = "",
  height = "100%",
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      style={style}
      className={`playerCard__icon ${className || ""}`}
      viewBox={viewBox}
    >
      <title>{name}</title>
      <path d="M41.72,38.24c-1,7-3.24,5.76-3.24,5.76l-2,0.05C36.52,43.2,37,33.79,37,27.17c0-0.05-0.01-1.53-0.2-3.62 c1.28,0.15,3.1,0.46,3.73,1.09C41.53,25.64,42.3,34.16,41.72,38.24z" />
      <path d="M35,27.17C35,34.1,34.48,44,34.48,44H12.04c0,0-1.04-2.97-1.04-7.92v-8.74c1.91,2.28,5.97,2.46,6.65,2.61 c0.91,0.2,9.21,0.07,9.35-5.47c0.16-6.65-3.86-6.52-9.05-6.47c-1.77,0.02-3.77,0.29-5.33,1.24c0.51-1.46,1.11-2.81,1.74-3.56 c1.74-2.04,2.88-3.45,7.07-4.37c3.14-0.69,7.45-0.23,9.4,0.99C33.71,14.12,35,22.21,35,27.17z" />
      <path
        fill="none"
        stroke="#f5f5f5"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M17.954,18.012 c5.189-0.056,9.206-0.178,9.041,6.472c-0.138,5.538-8.433,5.665-9.341,5.465c-0.908-0.2-7.656-0.442-7.654-5.465 C10.002,19.062,14.453,18.05,17.954,18.012z"
      />
    </svg>
  );
};

export default IconCrew;
