import React from "react";
import { TableRowProps } from "../types";
import scss from "./TableRow.module.scss";
import TableColumn from "components/atoms/table-column";
import TextDisplay from "components/atoms/text-display";

const TableRow: React.FC = () => {
  return (
    <div className={scss.wrapper}>
      <TableColumn style="column__id" variant="body">
        <TextDisplay>asda</TextDisplay>
      </TableColumn>
      <TableColumn style="column__title" variant="body">
        <TextDisplay>asda</TextDisplay>
      </TableColumn>
      <TableColumn style="column__description"  variant="body">
        <TextDisplay>asda</TextDisplay>
      </TableColumn>
    </div>
  );
};

export default TableRow;
