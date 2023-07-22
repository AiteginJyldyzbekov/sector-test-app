import Pagination from "components/molecules/pagination";
import SearchField from "components/molecules/search-field";
import Table from "components/organisms/table";
import { useAppDispatch, useAppSelector } from "helpers/reduxHooks";
import { useEffect } from "react";
import { fetchPosts } from "store/asyncReducers";
import { RootState } from "store/index.";

function HomePage() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <SearchField onSubmit="asd" placeholder="Search" />
      <Table posts={posts} />
      <Pagination />
    </div>
  );
}

export default HomePage;
