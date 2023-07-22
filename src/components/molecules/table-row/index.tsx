import React from "react";
import { TableRowProps } from "../types";
import scss from "./TableRow.module.scss";
import TableColumn from "components/atoms/table-column";
import TextDisplay from "components/atoms/text-display";

const TableRow: React.FC<TableRowProps> = ({ id, title, body }) => {
  return (
    <div className={scss.wrapper}>
      <TableColumn style="column__id" variant="body">
        <TextDisplay>{id}</TextDisplay>
      </TableColumn>
      <TableColumn style="column__title" variant="body">
        <TextDisplay>{title}</TextDisplay>
      </TableColumn>
      <TableColumn style="column__description" variant="body">
        <TextDisplay>{body}</TextDisplay>
      </TableColumn>
    </div>
  );
};

export default TableRow;
