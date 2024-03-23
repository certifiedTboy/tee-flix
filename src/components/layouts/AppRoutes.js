import { Routes, Route } from "react-router-dom";
import MovieScreen from "../../screens/MovieScreen";
import Movies from "../movies/Movies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieScreen />}>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
