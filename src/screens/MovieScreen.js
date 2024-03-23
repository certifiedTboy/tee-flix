import { Outlet } from "react-router-dom";
import MovieHero from "../components/movies/MoviehHero";

const MovieScreen = () => {
  return <MovieHero children={<Outlet />} />;
};

export default MovieScreen;
