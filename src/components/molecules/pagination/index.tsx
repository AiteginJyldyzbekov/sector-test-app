import scss from "./Pagination.module.scss";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className={scss.wrapper}>
      <Link to='/' className={scss.navigation__button}>Назад</Link>
      <div className={scss.pagination}>
        <Link to="/" className={scss.pagination__number_active}>1</Link>
        <Link to="/" className={scss.pagination__number}>2</Link>
        <Link to="/" className={scss.pagination__number}>3</Link>
      </div>
      <Link to='/' className={scss.navigation__button}>Вперед</Link>
    </div>
  );
};

export default Pagination;
