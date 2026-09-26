import { useState, useEffect, useCallback } from "react";
import MovieCard from "./movie-card";
import Loader from "@/components/common/Loader";
import { useGetNowPlayingMoviesMutation } from "@/features/apis/general-apis";
import "./movies.css";
import type { MovieCardProps } from "@/lib/types";

const Movies = () => {
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  const [getNowPlayingMovies, { data, isSuccess, isLoading }] =
    useGetNowPlayingMoviesMutation();

  // Fetch the first page
  useEffect(() => {
    getNowPlayingMovies(1);
  }, []);

  // Fetch subsequent pages
  useEffect(() => {
    if (pageNum > 1) {
      getNowPlayingMovies(pageNum);
    }
  }, [pageNum]);

  // Add newly fetched movies
  useEffect(() => {
    if (isSuccess && data) {
      setMovies((prev) => [...prev, ...data.results]);

      // Stop when there are no more pages
      if (pageNum >= data.total_pages) {
        setHasMore(false);
      }
    }
  }, [data, isSuccess, pageNum]);

  const changePageNum = useCallback(() => {
    if (!isLoading && hasMore) {
      setPageNum((prevPage) => prevPage + 1);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 500 &&
        !isLoading &&
        hasMore
      ) {
        changePageNum();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [changePageNum, isLoading, hasMore]);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE FOR ONLINE STREAMING</h5>
          <h2 className="title">Most Recent Movies</h2>
        </div>

        <div className="row movies-grid">
          {movies.map((movie, index) => (
            <MovieCard {...movie} key={index} />
          ))}
        </div>

        {isLoading && <Loader />}

        {!hasMore && movies.length > 0 && (
          <p className="text-center">No more movies available.</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
