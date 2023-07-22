import React from "react";
import scss from "./TableColimn.module.scss";
import { TableColumnProps } from "../types";

const TableColumn: React.FC<TableColumnProps> = ({ className, children }) => {
  return <div className={`${scss.column} ${className}`}>{children}</div>;
};

export default TableColumn;
