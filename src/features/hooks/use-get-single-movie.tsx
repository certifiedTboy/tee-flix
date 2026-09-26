import { useState } from "react";

interface MovieData {
  [key: string]: unknown;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
  },
};

export default () => {
  const [movieData, setMovieData] = useState<MovieData>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovieDetails = async (url: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage("something went wrong");
      }
      setIsLoading(false);
      return setMovieData(data);
    } catch (_error: unknown) {
      setIsLoading(false);
      return setErrorMessage("something went wrong");
    }
  };

  return [getMovieDetails, movieData, errorMessage, isLoading];
};
