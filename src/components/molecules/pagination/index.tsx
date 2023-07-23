import { useMemo } from "react";
import { PaginationProps } from "../types";
import scss from "./Pagination.module.scss";
import { Link, useParams } from "react-router-dom";

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
}) => {
  const { id }: any = useParams();

  const renderPagination = useMemo(() => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNum.push(i);
    }

    return pageNum.map((count) => (
      <Link
        key={count}
        to={`/pages/${count}`}
        className={
          id == count ? scss.pagination__number_active : scss.pagination__number
        }
      >
        {count}
      </Link>
    ));
  }, [totalPosts, id]);

  return (
    <div className={scss.wrapper}>
      <Link to={id != 1 ? `/pages/${+id - 1}` : '/pages/1'} className={scss.navigation__button}>
        Назад
      </Link>
      <div className={scss.pagination}>{renderPagination}</div>
      <Link to={id != 10 ? `/pages/${+id + 1}` : '/pages/10'} className={scss.navigation__button}>
        Вперед
      </Link>
    </div>
  );
};

export default Pagination;
