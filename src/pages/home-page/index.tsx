import React, { Suspense, lazy } from "react";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { useEffect } from "react";
import { fetchPosts } from "store/asyncReducers";
import { RootState } from "store/index.";
import usePagination from "helpers/usePagination";
import Preloader from "components/atoms/preloader";
//Simple imports

const Pagination = lazy(() => import("components/molecules/pagination"));
const Table = lazy(() => import("components/organisms/table"));
const SearchField = lazy(() => import("components/molecules/search-field"));
//Lazy load imports

function HomePage() {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state: RootState) => state.posts);
  const searchData = useAppSelector((state: RootState) => state.searchData);

  const { currentData, currentSearchedData, postsPerPage } = usePagination();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Suspense fallback={<Preloader full />}>
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
    </Suspense>
  );
}

export default HomePage;
