import React from "react";
import css from "./Button.module.css";

type buttonType = "button" | "submit" | "reset";

type ButtonParams = {
  onClick: () => void;
  className?: string;
  type?: buttonType;
  children?: React.ReactNode;
};

const Button = ({ className, type, onClick, children }: ButtonParams) => {
  return (
    <button
      className={`${css.button} ${className} `}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
