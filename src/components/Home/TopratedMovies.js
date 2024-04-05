import { useEffect } from "react";
import MovieCard from "../movies/MovieCard";
import useHttp from "../../hooks/useHttp";

const TopratedMovies = () => {
  const apiBaseUrl = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [
    fetchMovieData,
    movieData,
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ] = useHttp();

  useEffect(() => {
    fetchMovieData(
      `${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=1`,
      "not_fetch"
    );
  }, []);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE FOR ONLINE STREAMING</h5>
          <h2 className="title">Top Rated Movies</h2>
        </div>

        <div className="row movies-grid">
          {movieData?.length > 0 &&
            movieData.map((movie) => <MovieCard {...movie} key={movie.id} />)}
        </div>
      </div>
    </section>
  );
};

export default TopratedMovies;
