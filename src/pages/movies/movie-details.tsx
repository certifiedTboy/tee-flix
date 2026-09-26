import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useGetMovieThrillersMutation,
  useGetMovieDetailsMutation,
} from "@/features/apis/general-apis";
import TrailerModal from "@/components/common/trailer-modal";
import MovieCard from "./movie-card";
import { formatRuntime } from "../../helpers/helpers";
import type { MovieCardProps, TrailerResult, MovieGenre } from "@/lib/types";

const MovieDetails = () => {
  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);
  const [getMovieDetails, { data: movieData }] = useGetMovieDetailsMutation();
  const [getMovieThrillers, { data }] = useGetMovieThrillersMutation();

  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId);
    }
  }, [movieId]);

  useEffect(() => {
    if (movieData) {
      getMovieThrillers(movieData?.id);
    }
  }, [movieData]);

  useEffect(() => {
    // find main trailler key
    if (data && data?.results?.length > 0) {
      const trailerKey = data?.results.find(
        (result: TrailerResult) => result?.type === "Trailer",
      )?.key;
      // const keys = data?.results.map((result) => result?.key);

      if (trailerKey) {
        return setTrailer(trailerKey);
      }

      // if ((keys && keys.length > 0) || trailerKey) {
      //   // setPlayList([trailerKey, ...keys]);
      // }
    }
  }, [data]);

  const productionCompanies = movieData && movieData?.production_companies;

  return (
    <>
      {/* {open && ( */}
      <TrailerModal
        trailerKey={trailer}
        open={open}
        setOpenModal={() => setOpen(!open)}
      />
      {/* )} */}
      <section className="page-header movie-details-header intro">
        <div className="container">
          {movieData && (
            <div className="movie-details">
              <div className="movie-poster">
                <img
                  src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/${movieData.poster_path}`}
                  alt={movieData.title}
                />
              </div>
              <div className="details-content">
                {productionCompanies && (
                  <h5 className="director">{productionCompanies[0]?.name}</h5>
                )}
                <h2 className="title">{movieData?.title}</h2>
                <div className="banner-meta">
                  <ul>
                    <li className="vid">
                      <span className="type">{movieData?.type}</span>
                      <span className="quality">HD</span>
                    </li>
                    <li className="category">
                      <span>
                        {movieData && movieData?.genres
                          ? movieData.genres
                              .map((genre: MovieGenre) => genre?.name)
                              .join(", ")
                          : null}
                      </span>
                    </li>
                    <li className="time">
                      <span>
                        <i className="ri-calendar-2-line"></i>
                        {movieData?.release_date}
                      </span>
                      <span>
                        <i className="ri-time-line"></i>
                        {formatRuntime(movieData?.runtime)}
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="desc">{movieData?.overview}</p>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Link
                    className="btn watch-btn"
                    to={`/movies/${movieData?.id}/${movieData?.title}/stream`}
                  >
                    <i className="ri-play-fill"></i>
                    Watch Now
                  </Link>
                  <Link
                    className="btn watch-btn"
                    to="#"
                    onClick={() => setOpen(!open)}
                  >
                    <i className="ri-play-fill"></i>
                    Watch Trailer
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#fff" }}>Recommended Movies</h1>
        <p style={{ color: "#e4d804" }}>
          Because you are interested in {movieData?.title}
        </p>
      </div>
      <div className="row movies-grid">
        {movieData &&
          movieData.recommendations?.results.map((movie: MovieCardProps) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default MovieDetails;
