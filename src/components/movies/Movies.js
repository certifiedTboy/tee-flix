import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useHttp from "../../hooks/useHttp";
import MovieCard from "./MovieCard";

const apiBaseUrl = "https://api.themoviedb.org/3";
const API_KEY = "45fd9e5defbe418bb8b1195402393501";

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
      `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNum}`
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
        `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNum}`
      );
    };

    loadMore();
  }, [pageNum]);

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movies</h1>
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
