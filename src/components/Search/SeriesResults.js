import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import useSearchSeries from "../../hooks/useSearchSeries";
import Pagination from "../Commons/Pagination";
import MovieCard from "../Commons/MovieCard";
import NoSearchResult from "./NoSearchResult";
import SearchResult from "./SearchResult";

const SeriesResults = ({ filterCtg }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // use http custom hook to run search query
  const [getMovieData, movieData, errorMessage, isLoading, totalPages] =
    useSearchSeries();

  const params = useParams();

  const { searchQuery } = params;

  // search movie function
  const onSearchMovieData = async () => {
    await getMovieData(
      `${process.env.REACT_APP_API_URL}/search/tv?include_adult=true&language=en-US&query=${searchQuery}&page=${currentPage}`
    );
  };

  useEffect(() => {
    onSearchMovieData();
  }, [searchQuery]);

  useEffect(() => {
    onSearchMovieData();
  }, [currentPage]);

  return (
    <Fragment>
      {" "}
      <div className="row movies-grid">
        {movieData.length > 0 ? (
          movieData.map((movie) => (
            <MovieCard {...movie} key={movie.id} filterCtg={filterCtg} />
          ))
        ) : (
          <NoSearchResult />
        )}
      </div>
      {movieData?.length > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Fragment>
  );
};

export default SeriesResults;
