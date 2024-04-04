import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchMovies = ({ showSearch, setShowSearch, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchPage = useNavigate();

  const sendSearchQuery = (e) => {
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

  const hideShowSearch = (e) => {
    e.preventDefault();
    if (e.target.className === "search-container show") {
      setShowSearch((prev) => false);
    }
    return;
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
