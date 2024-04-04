import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import MovieCard from "./MovieCard";

const SearchMovies = ({ showSearch, setShowSearch, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // use http custom hook to run search query
  //   const [getMovieData, movieData] = useHttp();

  // search movie function
  //   const onSearchMovieData = async () => {
  //     await getMovieData(
  //       `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`,
  //       "search"
  //     );
  //   };

  const searchPage = useNavigate();

  const sendSearchQuery = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      alert("Please enter a search query");
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
