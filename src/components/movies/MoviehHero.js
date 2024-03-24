import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mapGenres } from "../../helpers/helpers";

const MovieHero = ({ children }) => {
  const { movie } = useSelector((state) => state.heroMovieState);
  const { genres } = useSelector((state) => state.genreState);

  return (
    <section className="container">
      <div className="content-container">
        <div
          className="featured-content"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
              url(${process.env.REACT_APP_IMAGE_PATH}/w300${movie.backdrop_path}) center/cover no-repeat`,
          }}
        >
          <img
            className="featured-title"
            src={`${process.env.REACT_APP_IMAGE_PATH}/w300${movie.poster_path}`}
            alt=""
          />
          <h1 className="movie-title">{movie.title}</h1>
          <div style={{ width: "70%" }}>
            <h3 className="featured-desc">{movie.overview}</h3>

            <p className="genre">{mapGenres(movie?.genre_ids || [], genres)}</p>
          </div>

          <Link className="featured-button" to={`/movies/${movie.id}`}>
            WATCH
          </Link>
        </div>

        {children}
      </div>
    </section>
  );
};

export default MovieHero;
