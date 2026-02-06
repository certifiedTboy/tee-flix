import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGetSeriesMovie from "../../hooks/useGetSeriesMovie";
import MovieCard from "../Commons/MovieCard";
import Loader from "../Commons/Loader";

const apiBaseUrl = process.env.REACT_APP_API_URL;

const Series = () => {
  const [fetchMovieData, movieData, hasMore, totalResults] =
    useGetSeriesMovie();

  const [pageNum, setPageNum] = useState(1);

  const loadMovie = async () => {
    await fetchMovieData(
      `${apiBaseUrl}/tv/popular?language=en-US&page=${pageNum}`,
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
          loader={<Loader />}
          style={{ overflow: "hidden" }}
          endMessage={""}
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
