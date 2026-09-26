import { useState, useEffect, Fragment } from "react";
import { useSearchMoviesMutation } from "@/features/apis/general-apis";
import { useParams } from "react-router-dom";
import Pagination from "@/components/common/pagination";
import MovieCard from "@/pages/movies/movie-card";
import NoSearchResult from "./no-search-result";
import type { MovieCardProps } from "@/lib/types";

const MovieResults = ({ filterCtg }: { filterCtg?: string }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchMovies, { data: movieData }] = useSearchMoviesMutation();

  const params = useParams();

  const { searchQuery } = params;

  useEffect(() => {
    searchMovies({ searchQuery, currentPage });
  }, [searchQuery, currentPage]);

  return (
    <Fragment>
      <div className="row movies-grid">
        {movieData && movieData?.results && movieData?.results?.length > 0 ? (
          movieData.results.map((movie: MovieCardProps) => (
            <MovieCard {...movie} key={movie.id} filterCtg={filterCtg} />
          ))
        ) : (
          <NoSearchResult />
        )}
      </div>
      {movieData && movieData?.results && movieData?.results?.length > 0 && (
        <Pagination
          totalPages={movieData?.total_pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Fragment>
  );
};

export default MovieResults;
