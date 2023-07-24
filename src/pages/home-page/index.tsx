import React, { Suspense, lazy, useState } from "react";
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

  const posts = useAppSelector((state: RootState) => state.posts);
  const searchData = useAppSelector((state: RootState) => state.searchData);

  const { currentData, currentSearchedData, postsPerPage } = usePagination();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <SearchField placeholder="Search" />
      <Table
        currentPosts={
          searchData != null && searchData.length > 0
            ? currentSearchedData
            : searchData != null && searchData.length <= 0
            ? currentData
            : []
        }
      />
      <Pagination
        totalPosts={
          searchData != null && searchData.length > 0
            ? searchData.length
            : posts.length
        }
        postsPerPage={postsPerPage}
      />
    </div>
  );
}

export default HomePage;
