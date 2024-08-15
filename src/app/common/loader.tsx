"use client";

import React from "react";

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0 0 0 / 40%);",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const loaderStyle: React.CSSProperties = {
  height: "45px",
  aspectRatio: "1.2",
  background: `
    repeating-linear-gradient(90deg, rgb(249, 115, 22) 0px, rgb(249, 115, 22) 20%, rgb(255 237 213 / 69%) 0px, rgb(255 237 213 / 79%) 40%) 50% 0px / calc(83.3333%) 50% no-repeat, repeating-linear-gradient(90deg, rgb(249, 115, 22) 0px, rgb(249 115 22 / 89%) 20%, rgb(255 237 213 / 14%) 0px, rgb(255 237 213 / 44%) 40%) 50% 100% no-repeat;
  `,
  backgroundSize: "calc(500% / 6) 50%",
  animation: "l10 1s infinite linear",
};

const addGlobalStyles = () => {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode(`
    @keyframes l10 {
      33% { background-position: 0 0, 100% 100%; }
      66% { background-position: 0 100%, 100% 0; }
      100% { background-position: 50% 100%, 50% 0; }
    }
  `)
  );
  document.head.appendChild(style);
};

if (typeof window !== "undefined") {
  addGlobalStyles();
}

const Loader: React.FC = () => {
  return (
    <div style={overlayStyle}>
      <div style={loaderStyle} />
    </div>
  );
};

export default Loader;
