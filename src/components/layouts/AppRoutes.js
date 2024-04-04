import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SingleMovieScreen from "../../screens/SingleMovieScreen";
import HomeScreen from "../../screens/HomeScreen";
import SearchResultScreen from "../../screens/SearchResultScreen";
import TopratedMovies from "../Home/TopratedMovies";
import ErrorScreen from "../../screens/ErrorScreen";
import Movies from "../movies/Movies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorScreen />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/" element={<HomeScreen />}>
        <Route path="home" element={<TopratedMovies />} />
        <Route path="movies" element={<Movies />} />
      </Route>

      <Route path="/movies/:movieId" element={<SingleMovieScreen />} />
      <Route path="/search/:searchQuery" element={<SearchResultScreen />} />
    </Routes>
  );
};

export default AppRoutes;
