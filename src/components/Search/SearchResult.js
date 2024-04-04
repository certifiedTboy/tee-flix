import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import Pagination from "../Commons/Pagination";
import MovieCard from "../movies/MovieCard";
import NoSearchResult from "./NoSearchResult";
import "./Search.css";

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage] = useState(8);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords;
  let nPages;

  // use http custom hook to run search query
  const [getMovieData, movieData, errorMessage, isLoading] = useHttp();

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

  if (!errorMessage && movieData?.length > 0) {
    currentRecords = movieData.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(movieData.length / recordsPerPage);
  } else {
    currentRecords = [];
    nPages = [];
  }

  console.log(currentRecords);

  return (
    <section className="results-sec">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">ONLINE STREAMING</h5>
          <h2 className="title">{searchQuery}'s Related Results</h2>
        </div>
        <div className="row movies-grid">
          {currentRecords.length > 0 ? (
            currentRecords.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))
          ) : (
            <NoSearchResult />
          )}
        </div>
        {movieData?.length > 1 && (
          <Pagination
            totalPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default SearchResult;
