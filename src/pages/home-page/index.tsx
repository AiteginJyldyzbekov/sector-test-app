import React, { Suspense, lazy, useState } from "react";
import Pagination from "components/molecules/pagination";
import Table from "components/organisms/table";
import SearchField from "components/molecules/search-field";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { useEffect } from "react";
import { fetchPosts } from "store/asyncReducers";
import { RootState } from "store/index.";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "store/types";

function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [finalData, setFinalData] = useState<PostType[] | []>();
  const [paginationData, setPaginationData] = useState<number>(0);

  const posts = useAppSelector((state: RootState) => state.posts);
  const searchData = useAppSelector((state: RootState) => state.searchData);
  const { id }: any = useParams();
  const [postsPerPage] = useState(10);

  const lastCountry = id * postsPerPage;
  const firstCountry = lastCountry - postsPerPage;
  const currentCountry = posts.slice(firstCountry, lastCountry);
  const test = searchData?.slice(firstCountry, lastCountry);
  console.log(currentCountry)

  useEffect(() => {
    if (Array.isArray(searchData) && searchData.length > 0) {
      setFinalData(test);
    } else if (searchData == null) {
      setFinalData([]);
    } else {
      setFinalData(currentCountry);
    }
  }, [searchData, posts]);

  useEffect(() => {
    if (Array.isArray(searchData) && searchData.length > 0) {
      setPaginationData(searchData.length);
    } else {
      setPaginationData(posts.length);
    }
  }, [searchData, posts]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <SearchField onSubmit="asd" placeholder="Search" />
      <Table currentPosts={finalData} />
      <Pagination
        totalPosts={paginationData}
        postsPerPage={postsPerPage}
      />
    </div>
  );
}

export default HomePage;
