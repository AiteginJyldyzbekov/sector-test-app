import Pagination from "components/molecules/pagination";
import SearchField from "components/molecules/search-field";
import Table from "components/organisms/table";

function HomePage() {
  return (
    <div className="container">
      <SearchField onSubmit='asd' placeholder="Search" />
      <Table />
      <Pagination />
    </div>
  );
}

export default HomePage;
