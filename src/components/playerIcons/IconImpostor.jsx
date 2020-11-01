import React from "react";

const IconImpostor = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "0 0 512 512",
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
      <g>
        <g>
          <polygon points="125.815,76 95.801,166 124.189,166 154.182,76 		" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M497,76h-15V61c0-8.291-6.709-15-15-15c-8.291,0-15,6.709-15,15v15H185.815l-29.996,90H512V91
			C512,82.709,505.291,76,497,76z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M45,76c-8.291,0-15,6.709-15,15c0,8.276-6.738,15-15,15c-8.291,0-15,6.709-15,15v45h64.182l30-90H45z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M0,196v15c0,8.291,6.709,15,15,15c8.262,0,15,6.724,15.146,12.876L5.239,414.628C1.379,441.681,22.272,466,49.6,466
			h59.004c22.559,0,41.748-16.89,44.648-39.287L163.594,346H225c24.814,0,45-20.186,45-45v-45h167
			c5.684,0,10.869-3.208,13.418-8.291L476.272,196C113.328,196,194.27,196,0,196z M180,316c-16.553,0-30-13.462-30-30
			c0-16.538,13.447-30,30-30h0.996c-4.131,13.239-4.871,27.42-1.23,41.074c1.798,6.79,4.834,13.017,8.379,18.926H180z M240,301
			c0,7.132-5.105,12.83-11.774,14.348c-9.481-5.92-16.564-15.066-19.486-25.964c-3.01-11.34-1.187-23.297,4.636-33.384H240V301z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default IconImpostor;
