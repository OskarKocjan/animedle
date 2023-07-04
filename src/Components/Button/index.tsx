import React from "react";
import "./styled.scss";
import { ButtonProps } from "models/ButtonModel";

const Button = ({
  text = "Click me!",
  color = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`styled-button bg-${color} bg-${color}-hover`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
