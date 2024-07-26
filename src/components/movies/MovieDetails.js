import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
// import { GoogleLogin } from "@react-oauth/google";
import MovieCard from "../Commons/MovieCard";
import { formatRuntime } from "../../helpers/helpers";

const MovieDetails = () => {
  const [getMovieDetails, movieData] = useGetSingleMovie();
  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    getMovieDetails(
      `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=recommendations`
    );
  }, [movieId]);

  return (
    <Fragment>
      <header className="page-header movie-details-header intro">
        <div className="container">
          {movieData && (
            <div className="movie-details">
              <div className="movie-poster">
                <img
                  src={`${process.env.REACT_APP_IMAGE_PATH}/w300${movieData?.poster_path}`}
                  alt={movieData?.title}
                />
              </div>
              <div className="details-content">
                {movieData?.production_companies && (
                  <h5 className="director">
                    {movieData?.production_companies[0]?.name}
                  </h5>
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
                              .map((genre) => genre?.name)
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
                <Link
                  className="btn watch-btn"
                  to={`/movies/${movieData?.id}/stream`}
                >
                  <i className="ri-play-fill"></i>
                  Watch Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#fff" }}>Recommended Movies</h1>
        <p style={{ color: "#e4d804" }}>
          Because you are interested in {movieData?.title}
        </p>
      </div>
      <div className="row movies-grid">
        {movieData &&
          movieData.recommendations?.results.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default MovieDetails;
