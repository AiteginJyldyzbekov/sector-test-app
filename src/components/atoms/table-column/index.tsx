import React from "react";
import scss from "./TableColumn.module.scss";
import { TableColumnProps } from "../types";

const TableColumn: React.FC<TableColumnProps> = ({
  style,
  children,
  variant,
}) => {
  return (
    <div
      className={`${
        variant === "header" ? scss.head__column : scss.body__column
      } ${style}`}
    >
      {children}
    </div>
  );
};

export default TableColumn;
