import React, { useMemo } from "react";
import scss from "./Table.module.scss";
import TableColumn from "components/atoms/table-column";
import ArrowBtn from "components/atoms/arrow-btn";
import TableRow from "components/molecules/table-row";
import { PostType } from "store/types";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { sortById, sortByTitle, sortByBody } from "store/slices/postSlice";
import { RootState } from "store/index.";

interface TableProps {
  currentPosts: PostType[] | [] | undefined;
}

const Table: React.FC<TableProps> = ({ currentPosts }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts);
  const searchData = useAppSelector((state: RootState) => state.searchData);

  const renderPosts = useMemo(
    () =>
      currentPosts?.map((post) => (
        <TableRow
          key={`${post.title}_${post.id}`}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      )),
    [currentPosts, posts, searchData]
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
              onClick={() => dispatch(sortById(searchData && "search"))}
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
