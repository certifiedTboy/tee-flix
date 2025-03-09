import { useEffect } from "react";
import { fetchMovies } from "../lib/apis/fetchMovie";

const AdultMovieScreen = () => {
  useEffect(() => {
    const onFetchMovies = async () => {
      const data = await fetchMovies();
      console.log(data);
    };

    onFetchMovies();
  }, []);
  return <div></div>;
};

export default AdultMovieScreen;
