import React from "react";
import scss from "./TextDisplay.module.scss";
import { TextDisplayProps } from "../types";

const TextDisplay: React.FC<TextDisplayProps> = ({ className, children }) => {
  return <p className={`${scss.text} ${className}`}>{children}</p>;
};

export default TextDisplay;
