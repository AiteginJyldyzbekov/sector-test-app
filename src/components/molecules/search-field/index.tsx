import SearchBtn from "components/atoms/search-btn";
import scss from "./SearchField.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { setData } from "store/slices/postSlice";
import { RootState } from "store/index.";
import { PostType } from "store/types";

interface SearchFieldProps {
  onSubmit: any;
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSubmit, placeholder }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts);
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchWord(value);
  };

  const searchBy = (element: string | number, word: string) => {
    return element.toString().toLowerCase().includes(word.toLowerCase());
  };

  useEffect(() => {
    if (posts.length) {
      const copiedARr = [...posts];
      const filtered = copiedARr.filter((el) => {
        return (
          searchBy(el.id, searchWord) ||
          searchBy(el.title, searchWord) ||
          searchBy(el.body, searchWord)
        );
      });
      setTimeout(() => {
        dispatch(setData(filtered));
      }, 500);
    }
  }, [searchWord, dispatch]);

  return (
    <form className={scss.search__wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchWord}
        onChange={handleSearch}
        className={scss.search__input}
      />
      <button type="submit" className={scss.search__button}>
        <SearchBtn />
      </button>
    </form>
  );
};

export default SearchField;
