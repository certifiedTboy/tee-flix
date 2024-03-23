import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import MovieCard from "./MovieCard";

const apiBaseUrl = "https://api.themoviedb.org/3";
const API_KEY = "45fd9e5defbe418bb8b1195402393501";

const Movies = () => {
  const [fetchMovieData, movieData, errorMessage, isLoading] = useHttp();

  useEffect(() => {
    fetchMovieData(`${apiBaseUrl}/movie/popular?api_key=${API_KEY}&page=1`);
  }, []);
  return (
    <MovieCard movies={movieData} />
    // <div className="movie-list-container">
    //   <h1 className="movie-list-title">Movies</h1>
    //   <div className="movie-list-wrapper">

    //   </div>
    // </div>
  );
};

export default Movies;
