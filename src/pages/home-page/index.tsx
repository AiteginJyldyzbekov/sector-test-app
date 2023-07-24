import React, { Suspense, lazy, useCallback, useState } from "react";
import Pagination from "components/molecules/pagination";
import Table from "components/organisms/table";
import SearchField from "components/molecules/search-field";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { useEffect } from "react";
import { fetchPosts } from "store/asyncReducers";
import { RootState } from "store/index.";
import usePagination from "helpers/usePagination";

function HomePage() {
  const dispatch = useAppDispatch();
  const { currentCountry, postsPerPage } = usePagination();
  const posts = useAppSelector((state: RootState) => state.posts);
  const [searchingWord, setSearchingWord] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const changeHandler = useCallback((value: string) => {
    setSearchingWord(value);
  }, []);

  return (
    <div className="container">
      <SearchField placeholder="Search" submit={changeHandler} />
      <Table posts={currentCountry} searchingWord={searchingWord} />
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} />
    </div>
  );
}

export default HomePage;
