import React, { useEffect, useMemo, useState } from "react";
import scss from "./Table.module.scss";
import TableColumn from "components/atoms/table-column";
import ArrowBtn from "components/atoms/arrow-btn";
import TableRow from "components/molecules/table-row";
import { PostType } from "store/types";
import { useAppDispatch } from "helpers/reduxHooks";
import { sortById, sortByTitle, sortByBody } from "store/slices/postSlice";

interface TableProps {
  posts: PostType[];
  searchingWord: string;
}

const Table: React.FC<TableProps> = ({ posts, searchingWord }) => {
  const dispatch = useAppDispatch();
  const [postsState, setPostsState] = useState(posts)

  const searchBy = (element: string | number, word: string) => {
    return element.toString().toLowerCase().includes(word.toLowerCase());
  };

  useEffect(() => {
    if (posts.length) {
      const filtered = posts.filter((el) => {
        return (
          searchBy(el.id, searchingWord) ||
          searchBy(el.title, searchingWord) ||
          searchBy(el.body, searchingWord)
        );
      });
      setPostsState(filtered);
    }
  }, [posts, searchingWord]);

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
