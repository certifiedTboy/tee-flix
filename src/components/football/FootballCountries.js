import { useEffect } from "react";
import useGetFootballData from "../../hooks/useFootballData";
import FootballCard from "../Commons/FootballCard";
const FootballCountries = () => {
  const [getCountries, result, errorMessage, isLoading] = useGetFootballData();

  useEffect(() => {
    getCountries("get_countries");
  }, []);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE COUNTRIES</h5>
          <h2 className="title">Most Recent Movies</h2>
        </div>
        <div className="row movies-grid">
          {result?.length > 0 &&
            result.map((data) => (
              <FootballCard {...data} key={data.country_id} />
            ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default FootballCountries;
