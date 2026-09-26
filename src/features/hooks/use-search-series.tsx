import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
  },
};

export default () => {
  const [movieData, setMovieData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovieData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage("something went wrong");
      }

      setIsLoading(false);

      setTotalPages(data?.total_pages);

      return setMovieData(data?.results);
    } catch (error) {
      return setErrorMessage("something went wrong");
    }
  };

  return [fetchMovieData, movieData || [], errorMessage, isLoading, totalPages];
};
