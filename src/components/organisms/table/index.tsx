import React from "react";
import scss from "./Table.module.scss";
import TableColumn from "components/atoms/table-column";
import TextDisplay from "components/atoms/text-display";
import ArrowBtn from "components/atoms/arrow-btn";
import TableRow from "components/molecules/table-row";

const Table: React.FC = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content__wrapper}>
        <div className={scss.content_top}>
          <TableColumn
            style={`${scss.content__column} column__id`}
            variant="header"
          >
            <p>id</p>
            <ArrowBtn />
          </TableColumn>
          <TableColumn
            style={`${scss.content__column} column__title`}
            variant="header"
          >
            <p>title</p>
            <ArrowBtn />
          </TableColumn>
          <TableColumn
            style={`${scss.content__column} column__description`}
            variant="header"
          >
            <p>description</p>
            <ArrowBtn />
          </TableColumn>
        </div>
      </div>
      <TableRow />
    </div>
  );
};

export default Table;
