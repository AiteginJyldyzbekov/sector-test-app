import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";
import { RootState } from "store/index.";


const usePagination = () => {
  const { id }: any = useParams();
  const posts = useAppSelector((state: RootState) => state.posts);
  const [postsPerPage] = useState(10);

  const lastCountry = id * postsPerPage;
  const firstCountry = lastCountry - postsPerPage;
  const currentCountry = posts.slice(firstCountry, lastCountry);

  return {currentCountry, postsPerPage}
};

export default usePagination;
