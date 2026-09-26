import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SearchMoviesProps {
  showSearch: boolean;
  setShowSearch: (showSearch: boolean) => void;
  setCurrentPage: (page: number) => void;
}

const SearchMovies = ({
  showSearch,
  setShowSearch,
  setCurrentPage,
}: SearchMoviesProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchPage = useNavigate();

  const sendSearchQuery = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchQuery === "") {
      return;
    } else {
      searchPage(`/search/${searchQuery}`);
      setShowSearch(false);
      setCurrentPage(1);
      setSearchQuery("");
    }
  };

  const hideShowSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLElement;

    if (target.className === "search-container show") {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.body.style = "overflow: hidden";
    }

    return () => {
      document.body.style = "overflow: auto";
    };
  }, [showSearch]);

  return (
    <div
      className={showSearch ? "search-container show" : "search-container"}
      onClick={(e) => hideShowSearch(e)}
    >
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <button
          className="link btn search-btn"
          onClick={(e) => sendSearchQuery(e)}
        >
          <i className="ri-search-line"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
