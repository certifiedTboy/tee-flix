import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
  },
};

export default () => {
  const [movieData, setMovieData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

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

      if (data?.results.length <= 0) {
        return setHasMore(false);
      }
      setTotalResults(data?.total_results);

      return setMovieData((prev) => [...prev, ...data?.results]);
    } catch (error) {
      return setErrorMessage("something went wrong");
    }
  };

  return [
    fetchMovieData,
    movieData || [],
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ];
};
