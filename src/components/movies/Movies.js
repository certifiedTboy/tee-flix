import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useHttp from "../../hooks/useHttp";
import MovieCard from "./MovieCard";

const apiBaseUrl = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
  const [
    fetchMovieData,
    movieData,
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ] = useHttp();

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchMovieData(
      `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNum}`,
      "fetch"
    );
  }, []);

  const changePageNum = () => {
    if (hasMore) {
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    const loadMore = async () => {
      await fetchMovieData(
        `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNum}`,
        "fetch"
      );
    };

    loadMore();
  }, [pageNum]);

  return (
    <div className="movie-list-container">
      <h1
        className="movie-list-title"
        style={{ marginBottom: "30px", marginTop: "30px" }}
      >
        Movies
      </h1>
      <InfiniteScroll
        dataLength={totalResults}
        next={changePageNum}
        hasMore={hasMore}
        loader={<p> Please Wait </p>}
        style={{ overflow: "hidden" }}
        endMessage={<p>Yay! You have seen it all!</p>}
      >
        <MovieCard movies={[...new Set(movieData)]} />
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
