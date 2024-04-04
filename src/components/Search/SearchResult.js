import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import Pagination from "../Commons/Pagination";
import MovieCard from "../movies/MovieCard";
import NoSearchResult from "./NoSearchResult";
import "./Search.css";

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // use http custom hook to run search query
  const [getMovieData, movieData] = useHttp();

  const params = useParams();

  const { searchQuery } = params;

  // search movie function
  const onSearchMovieData = async () => {
    await getMovieData(
      `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`,
      "search"
    );
  };

  useEffect(() => {
    onSearchMovieData();
  }, [searchQuery]);

  return (
    <section className="results-sec">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">ONLINE STREAMING</h5>
          <h2 className="title">{searchQuery}'s Related Results</h2>
        </div>
        <div className="row movies-grid">
          {movieData.length ? (
            movieData.map((movie) => (
              <MovieCard
                {...movie}
                key={movie.imdbID}
                // setWatchList={setWatchList}
                // watchList={watchList}
              />
            ))
          ) : (
            <NoSearchResult />
          )}
        </div>
        {/* {totalPages > 1 && ( */}
        <Pagination
          totalPages={3}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {/* )} */}
      </div>
    </section>
  );
};

export default SearchResult;
