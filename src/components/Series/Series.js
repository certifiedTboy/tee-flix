import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGetSeriesMovie from "../../hooks/useGetSeriesMovie";
import MovieCard from "../Commons/MovieCard";

const apiBaseUrl = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Series = () => {
  const [
    fetchMovieData,
    movieData,
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ] = useGetSeriesMovie();

  const [pageNum, setPageNum] = useState(1);

  const loadMovie = async () => {
    await fetchMovieData(
      `${apiBaseUrl}/tv/popular?language=en-US&page=${pageNum}`,
      "fetch"
    );
  };

  useEffect(() => {
    loadMovie();
  }, []);

  const changePageNum = () => {
    if (hasMore) {
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    loadMovie();
  }, [pageNum]);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE FOR ONLINE STREAMING</h5>
          <h2 className="title">Most Recent Tv Shows / Series</h2>
        </div>

        <InfiniteScroll
          dataLength={totalResults}
          next={changePageNum}
          hasMore={hasMore}
          loader={<p> Please Wait </p>}
          style={{ overflow: "hidden" }}
          endMessage={<p>Yay! You have seen it all!</p>}
        >
          <div className="row movies-grid">
            {movieData?.length > 0 &&
              movieData.map((movie) => <MovieCard {...movie} key={movie.id} />)}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Series;
