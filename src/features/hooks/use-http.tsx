import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "@/features/redux/hero-movie-slice";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

console.log(API_KEY);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authoriztaion: `Bearer ${import.meta.env.VITE_APP_API_KEY} `,
  },
};

const useHttp = () => {
  const [movieData, setMovieData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState();

  const dispatch = useDispatch();

  const fetchMovieData = async (url: string, queryType: any) => {
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

      setTotalPages(data?.total_pages);
      return setMovieData(data?.results);
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
    totalPages,
  ];
};

export default useHttp;
