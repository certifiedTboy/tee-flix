import { Fragment } from "react";
import MovieDetails from "../components/movies/MovieDetails";
import RelatedMovies from "../components/movies/RelatedMovies";

const SingleMovieScreen = () => {
  return (
    <Fragment>
      <MovieDetails />
      <RelatedMovies />
    </Fragment>
  );
};

export default SingleMovieScreen;
