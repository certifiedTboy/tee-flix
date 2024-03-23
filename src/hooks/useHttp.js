import { useState } from "react";

const options = { method: "GET", headers: { accept: "application/json" } };

const useHttp = () => {
  const [movieData, setMovieData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage("something went wrong");
      }

      setIsLoading(false);
      return setMovieData(data?.results);
    } catch (error) {
      return setErrorMessage("something went wrong");
    }
  };

  return [fetchMovieData, movieData, errorMessage, isLoading];
};

export default useHttp;
