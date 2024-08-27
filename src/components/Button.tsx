import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttonStyle?: string; // Optional to allow defaulting
  className?: string; // Optional to allow defaulting
  buttonSpace?: string; // Optional to avoid errors if not provided
  type?: string; // Optional to allow flexibility
}

const STYLES = ["btn-primary", "btn-outline"];
const SPACES = ["btn-md", "btn-lg"];

const Button = ({
  children,
  buttonStyle = STYLES[1],
  buttonSpace = SPACES[0],
  className = "",
  type,
}: Props) => {
  console.log(buttonStyle);
  return (
    <button
      type="sumbit"
      className={`btn ${buttonStyle} ${buttonSpace}  ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
