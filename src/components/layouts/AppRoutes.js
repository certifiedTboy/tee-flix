import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SingleMovieScreen from "../../screens/SingleMovieScreen";
import HomeScreen from "../../screens/HomeScreen";
import TopratedMovies from "../Home/TopratedMovies";
import Movies from "../movies/Movies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/" element={<HomeScreen />}>
        <Route path="home" element={<TopratedMovies />} />
        <Route path="movies" element={<Movies />} />
      </Route>

      <Route path="/movies/:movieId" element={<SingleMovieScreen />} />
    </Routes>
  );
};

export default AppRoutes;
