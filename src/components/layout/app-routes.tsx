import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TopratedMovies from "@/pages/home/top-rated-movies";
import Series from "@/pages/series/series";
import Movies from "@/pages/movies/movies";
import AppDownloadPage from "@/pages/app-download-page";
import ErrorPage from "@/pages/error/error-page";
import SingleMoviePage from "@/pages/movies/single-movie-page";
import SingleSeriesPage from "@/pages/series/single-series-screen";
import HomePage from "@/pages/home/home-page";
import SearchResultPage from "@/pages/search/search-result-page";
import StreamingMoviePage from "@/pages/movies/streaming-movie-page";
import StreamingSeriesPage from "@/pages/series/streaming-series-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/downloads" element={<AppDownloadPage />} />
      <Route path="/" element={<HomePage />}>
        <Route path="home" element={<TopratedMovies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Route>

      <Route
        path="/movies/:movieId/:movieTitle"
        element={<SingleMoviePage />}
      />
      <Route
        path="/series/:seriesId/:seriesTitle"
        element={<SingleSeriesPage />}
      />
      <Route path="/search/:searchQuery" element={<SearchResultPage />} />
      <Route
        path="/movies/:movieId/:movieTitle/stream"
        element={<StreamingMoviePage />}
      />
      <Route
        path="/series/:seriesId/:seriesTitle/stream"
        element={<StreamingSeriesPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
