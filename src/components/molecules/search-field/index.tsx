import SearchBtn from "components/atoms/search-btn";
import scss from "./SearchField.module.scss";
import { useState } from "react";

interface SearchFieldProps {
  submit: any;
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ submit, placeholder }) => {
  const [searchWord, setSearchWord] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(searchWord)
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={scss.search__wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchWord}
        onChange={changeHandler}
        className={scss.search__input}
      />
      <button type="submit" className={scss.search__button}>
        <SearchBtn />
      </button>
    </form>
  );
};

export default SearchField;
