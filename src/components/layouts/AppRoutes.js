import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SingleMovieScreen from "../../screens/SingleMovieScreen";
import SingleSeriesScreen from "../../screens/SingleSeriesScreen";
import HomeScreen from "../../screens/HomeScreen";
import SearchResultScreen from "../../screens/SearchResultScreen";
import StreamingMovieScreen from "../../screens/StreamingMovieScreen";
import StreamingSeriesScreen from "../../screens/StreamingSeriesScreen";
import TopratedMovies from "../Home/TopratedMovies";
import ErrorScreen from "../../screens/ErrorScreen";
import Movies from "../movies/Movies";
import Series from "../Series/Series";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorScreen />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route path="/" element={<HomeScreen />}>
        <Route path="home" element={<TopratedMovies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Route>

      <Route path="/movies/:movieId" element={<SingleMovieScreen />} />
      <Route path="/series/:seriesId" element={<SingleSeriesScreen />} />
      <Route path="/search/:searchQuery" element={<SearchResultScreen />} />
      <Route
        path="/movies/:movieId/stream"
        element={<StreamingMovieScreen />}
      />
      <Route
        path="/series/:seriesId/stream"
        element={<StreamingSeriesScreen />}
      />
    </Routes>
  );
};

export default AppRoutes;
