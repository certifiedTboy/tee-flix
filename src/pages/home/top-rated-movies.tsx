import { useEffect } from "react";
import MovieCard from "@/pages/movies/movie-card";
import { useGetPopularMoviesMutation } from "@/features/apis/general-apis";
import type { MovieCardProps } from "@/lib/types";

const TopratedMovies = () => {
  const [getPopularMovies, { data }] = useGetPopularMoviesMutation();

  useEffect(() => {
    getPopularMovies(1);
  }, []);

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">AVAILABLE FOR ONLINE STREAMING</h5>
          <h2 className="title">Top Rated Movies</h2>
        </div>

        <div className="row movies-grid">
          {data &&
            data?.results &&
            data?.results?.length > 0 &&
            data?.results?.map((movie: MovieCardProps) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopratedMovies;
