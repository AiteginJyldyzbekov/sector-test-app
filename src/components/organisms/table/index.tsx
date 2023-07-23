import React, { useMemo } from "react";
import scss from "./Table.module.scss";
import TableColumn from "components/atoms/table-column";
import ArrowBtn from "components/atoms/arrow-btn";
import TableRow from "components/molecules/table-row";
import { PostType } from "store/types";

interface TableProps {
  posts: PostType[];
}

const Table: React.FC<TableProps> = ({ posts }) => {
  const renderPosts = useMemo(() => (
     posts.map((post) => (
      <TableRow
        key={`${post.title}_${post.id}`}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    ))
  ), [posts]);

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
      {renderPosts}
    </div>
  );
};

export default Table;
