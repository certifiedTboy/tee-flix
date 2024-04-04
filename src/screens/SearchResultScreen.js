import { Fragment } from "react";
import GeneralBanner from "../components/Commons/GeneralBanner";
import SearchResult from "../components/Search/SearchResult";

const SearchResultScreen = () => {
  return (
    <Fragment>
      <GeneralBanner title={"Search Results"} pathName={"Search"} />
      <SearchResult />
    </Fragment>
  );
};

export default SearchResultScreen;
