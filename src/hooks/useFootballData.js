import { useState } from "react";

const options = { method: "GET", headers: { accept: "application/json" } };
const BASE_URL = process.env.REACT_APP_FOOTBALL_API_BASE_URL;
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const selectedCountries = [
  "England",
  "France",
  "Germany",
  "Italy",
  "Netherland",
  "Spain",
  "Nigeria",
  "Ghana",
  "Portugal",
  "eurocups",
];

const useGetFootballData = () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchFootballData = async (action) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/?action=${action}&APIkey=${API_KEY}`,
        options
      );
      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage("something went wrong");
      }

      setIsLoading(false);
      if (action === "get_countries") {
        const filteredCountries = data?.filter((country) =>
          selectedCountries.includes(country.country_name)
        );

        console.log(filteredCountries);
        return setResult(filteredCountries);
      }
      setResult(data);
    } catch (error) {
      return setErrorMessage("something went wrong");
    }
  };

  return [fetchFootballData, result, errorMessage, isLoading];
};

export default useGetFootballData;
