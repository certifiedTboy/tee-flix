import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

export default () => {
  const [movieData, setMovieData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMovieDetails = async (url) => {
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
    } catch (error) {
      setIsLoading(false);
      return setErrorMessage("something went wrong");
    }
  };

  return [getMovieDetails, movieData, errorMessage, isLoading];
};
