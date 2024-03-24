import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "../lib/redux/heroMovieSlice";

const options = { method: "GET", headers: { accept: "application/json" } };

const useHttp = () => {
  const [movieData, setMovieData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const dispatch = useDispatch();

  const fetchMovieData = async (url, queryType) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage("something went wrong");
      }

      setIsLoading(false);

      if (data?.results.length <= 0) {
        return setHasMore(false);
      }
      setTotalResults(data?.total_results);
      if (queryType === "fetch") {
        dispatch(setMovie(data?.results[Math.floor(Math.random() * 10)]));
        return setMovieData([...movieData, ...data?.results]);
      }

      return setMovieData(data?.results);
    } catch (error) {
      return setErrorMessage("something went wrong");
    }
  };

  return [
    fetchMovieData,
    movieData,
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ];
};

export default useHttp;
