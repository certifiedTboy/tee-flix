import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieResults from "./MovieResults";
import SeriesResults from "./SeriesResults";
import "./Search.css";

const SearchResult = () => {
  const [filterCtg, setFilterCtg] = useState("movies");

  const params = useParams();

  const { searchQuery } = params;

  return (
    <section className="results-sec">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">ONLINE STREAMING</h5>
          <h2 className="title">{searchQuery}'s Related Results</h2>
        </div>

        <div
          className="btns-div categories-btns"
          style={{ textAlign: "center" }}
        >
          <button
            className={
              filterCtg === "movies"
                ? "btn category-btn active"
                : "btn category-btn"
            }
            onClick={() => setFilterCtg("movies")}
          >
            Movies Result
          </button>
          <button
            className={
              filterCtg === "series"
                ? "btn category-btn active"
                : "btn category-btn"
            }
            onClick={() => setFilterCtg("series")}
          >
            Series / Tv Results
          </button>
        </div>

        {filterCtg === "movies" && <MovieResults filterCtg={filterCtg} />}
        {filterCtg === "series" && <SeriesResults filterCtg={filterCtg} />}
      </div>
    </section>
  );
};

export default SearchResult;
