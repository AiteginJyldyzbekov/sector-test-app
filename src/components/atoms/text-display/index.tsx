import React from "react";
import scss from "./TextDisplay.module.scss";
import { TextDisplayProps } from "../types";

const TextDisplay: React.FC<TextDisplayProps> = ({ children }) => {
  return <p className={scss.text}>{children}</p>;
};

export default TextDisplay;
