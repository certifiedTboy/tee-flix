import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MovieScreen from "../../screens/MovieScreen";
import Movies from "../movies/Movies";
import SingleMovieScreen from "../../screens/SingleMovieScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/movies" replace={true} />}
        exact
      />
      <Route path="/" element={<MovieScreen />}>
        <Route path="movies" element={<Movies />} />
      </Route>

      <Route path="/movies/:movieId" element={<SingleMovieScreen />} />
    </Routes>
  );
};

export default AppRoutes;
