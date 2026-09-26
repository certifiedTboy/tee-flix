import { Fragment } from "react";
import GeneralBanner from "@/components/common/general-banner";
import SearchResult from "./search-result";

const SearchResultPage = () => {
  return (
    <Fragment>
      <GeneralBanner title={"Search Results"} pathName={"Search"} />
      <SearchResult />
    </Fragment>
  );
};

export default SearchResultPage;
