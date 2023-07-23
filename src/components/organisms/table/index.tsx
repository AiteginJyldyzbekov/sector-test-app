import React, { useMemo } from "react";
import scss from "./Table.module.scss";
import TableColumn from "components/atoms/table-column";
import ArrowBtn from "components/atoms/arrow-btn";
import TableRow from "components/molecules/table-row";
import { PostType } from "store/types";
import { useAppDispatch } from "helpers/reduxHooks";
import { sortById, sortByTitle, sortByBody } from "store/slices/postSlice";

interface TableProps {
  posts: PostType[];
}

const Table: React.FC<TableProps> = ({ posts }) => {
  const dispatch = useAppDispatch();
  const renderPosts = useMemo(
    () =>
      posts.map((post) => (
        <TableRow
          key={`${post.title}_${post.id}`}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      )),
    [posts]
  );

  return (
    <div className={scss.wrapper}>
      <div className={scss.content__wrapper}>
        <div className={scss.content_top}>
          <TableColumn
            style={`${scss.content__column} column__id`}
            variant="header"
          >
            <div
              className={scss.column__container}
              onClick={() => dispatch(sortById())}
            >
              <p>ID</p>
              <ArrowBtn />
            </div>
          </TableColumn>
          <TableColumn
            style={`${scss.content__column} column__title`}
            variant="header"
          >
            <div
              className={scss.column__container}
              onClick={() => dispatch(sortByTitle())}
            >
              <p>Заголовок</p>
              <ArrowBtn />
            </div>
          </TableColumn>
          <TableColumn
            style={`${scss.content__column} column__description`}
            variant="header"
          >
            <div
              className={scss.column__container}
              onClick={() => dispatch(sortByBody())}
            >
              <p>Описание</p>
              <ArrowBtn />
            </div>
          </TableColumn>
        </div>
      </div>
      {renderPosts}
    </div>
  );
};

export default Table;
