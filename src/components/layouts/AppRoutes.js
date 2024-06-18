import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TopratedMovies from "../Home/TopratedMovies";
import Series from "../Series/Series";
import Movies from "../movies/Movies";
import FootballScreen from "../../screens/FootballScreen";

const ErrorScreen = lazy(() => import("../../screens/ErrorScreen"));
const SingleMovieScreen = lazy(() => import("../../screens/SingleMovieScreen"));
const SingleSeriesScreen = lazy(() =>
  import("../../screens/SingleSeriesScreen")
);
const HomeScreen = lazy(() => import("../../screens/HomeScreen"));
const SearchResultScreen = lazy(() =>
  import("../../screens/SearchResultScreen")
);
const StreamingMovieScreen = lazy(() =>
  import("../../screens/StreamingMovieScreen")
);
const StreamingSeriesScreen = lazy(() =>
  import("../../screens/StreamingSeriesScreen")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorScreen />} />
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />
      <Route
        path="/"
        element={
          <Suspense fallback={<></>}>
            {" "}
            <HomeScreen />{" "}
          </Suspense>
        }
      >
        <Route path="home" element={<TopratedMovies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Route>

      <Route
        path="/movies/:movieId"
        element={
          <Suspense fallback={<></>}>
            {" "}
            <SingleMovieScreen />{" "}
          </Suspense>
        }
      />
      <Route
        path="/series/:seriesId"
        element={
          <Suspense fallback={<></>}>
            {" "}
            <SingleSeriesScreen />
          </Suspense>
        }
      />
      <Route
        path="/search/:searchQuery"
        element={
          <Suspense fallback={<></>}>
            {" "}
            <SearchResultScreen />{" "}
          </Suspense>
        }
      />
      <Route
        path="/movies/:movieId/stream"
        element={
          <Suspense fallback={<></>}>
            <StreamingMovieScreen />
          </Suspense>
        }
      />
      <Route
        path="/series/:seriesId/stream"
        element={
          <Suspense fallback={<></>}>
            <StreamingSeriesScreen />
          </Suspense>
        }
      />

      <Route
        path="/football-match"
        element={
          <Suspense fallback={<></>}>
            <FootballScreen />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
