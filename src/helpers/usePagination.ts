import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";
import { RootState } from "store/index.";

const usePagination = () => {
  const posts = useAppSelector((state: RootState) => state.posts);
  const searchData = useAppSelector((state: RootState) => state.searchData);
  const { id }: any = useParams();
  const [postsPerPage] = useState(10);

  const lastCountry = id * postsPerPage;
  const firstCountry = lastCountry - postsPerPage;
  const currentData = posts.slice(firstCountry, lastCountry);
  const currentSearchedData = searchData?.slice(firstCountry, lastCountry);

  return { currentData, currentSearchedData, postsPerPage };
};

export default usePagination;
