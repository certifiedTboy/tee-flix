import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useHttp from "../../hooks/useHttp";
import MovieCard from "../Commons/MovieCard";
import Loader from "../Commons/Loader";
import "./Movie.css";

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

  const loadMovies = async () => {
    await fetchMovieData(
      `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=${pageNum}`,
      "fetch"
    );
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const changePageNum = () => {
    if (hasMore) {
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [pageNum]);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE FOR ONLINE STREAMING</h5>
          <h2 className="title">Most Recent Movies</h2>
        </div>

        <InfiniteScroll
          dataLength={totalResults}
          next={changePageNum}
          hasMore={hasMore}
          loader={<Loader />}
          style={{ overflow: "hidden" }}
          endMessage={<p>Yay! You have seen it all!</p>}
        >
          <div className="row movies-grid">
            {movieData?.length > 0 &&
              movieData.map((movie) => <MovieCard {...movie} key={movie.id} />)}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Movies;
