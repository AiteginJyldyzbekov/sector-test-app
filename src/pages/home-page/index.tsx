import React, { Suspense, lazy, useState } from "react";
import Pagination from "components/molecules/pagination";
import Table from "components/organisms/table";
import SearchField from "components/molecules/search-field";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { useEffect } from "react";
import { fetchPosts } from "store/asyncReducers";
import { RootState } from "store/index.";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const posts = useAppSelector((state: RootState) => state.posts);
  const { id }: any = useParams();
  const [postsPerPage] = useState(10);

  const lastCountry = id * postsPerPage;
  const firstCountry = lastCountry - postsPerPage;
  const currentCountry = posts.slice(firstCountry, lastCountry);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <SearchField onSubmit="asd" placeholder="Search" />
      <Table posts={currentCountry} />
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} />
    </div>
  );
}

export default HomePage;
