import React from "react";
import './Button.css';

function Button({ text, width, height, clickMethod, bgColor }) {
  return (
    <button
      style={{ width: width, height: height, backgroundColor: bgColor }}
      onClick={clickMethod}
    >
      {text}
    </button>
  );
}

export default Button;
