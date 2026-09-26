import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSearchSeriesMutation } from "@/features/apis/general-apis";
import Pagination from "@/components/common/pagination";
import MovieCard from "@/pages/movies/movie-card";
import NoSearchResult from "./no-search-result";
import type { MovieCardProps } from "@/lib/types";

const SeriesResults = ({ filterCtg }: { filterCtg: string }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchSeries, { data: movieData }] = useSearchSeriesMutation();

  const params = useParams();

  const { searchQuery } = params;

  useEffect(() => {
    searchSeries({ searchQuery, currentPage });
  }, [searchQuery, currentPage]);

  return (
    <Fragment>
      <div className="row movies-grid">
        {movieData && movieData?.results?.length > 0 ? (
          movieData?.results?.map((movie: MovieCardProps) => (
            <MovieCard {...movie} key={movie.id} filterCtg={filterCtg} />
          ))
        ) : (
          <NoSearchResult />
        )}
      </div>
      {movieData?.length > 1 && (
        <Pagination
          totalPages={movieData?.total_pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Fragment>
  );
};

export default SeriesResults;
