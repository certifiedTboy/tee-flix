import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { mapGenres } from "../../helpers/helpers";

const IMAGES_PATH = process.env.REACT_APP_IMAGE_PATH;

const MovieCard = (props) => {
  const { genres } = useSelector((state) => state.genreState);

  const location = useLocation();

  return (
    <div className="single-movie">
      <div className="movie-poster">
        <img
          src={
            props?.poster_path
              ? `${IMAGES_PATH}/w300${props.poster_path}`
              : "https://via.placeholder.com/92x138.png?text=No+Cover"
          }
          alt={`${props.title} poster img`}
        />
        <ul className="overlay-btns">
          <li>
            <Link
              className="btn details-btn"
              to={`/${
                location.pathname === "/movies" ||
                location.pathname.split("/")[1] === "movies" ||
                location.pathname === "/home" ||
                props.filterCtg === "movies"
                  ? "movies"
                  : "series"
              }/${props.id}`}
            >
              Details
            </Link>
          </li>
        </ul>
      </div>
      <div className="movie-content">
        <div className="top row">
          <h5 className="title">
            <Link className="link" to={`/movies/${props.id}`}>
              {props?.title
                ? props?.title?.length > 20
                  ? props.title.split("").slice(0, 20).join("") + "..."
                  : props.title
                : props?.name?.length > 20
                ? props.name.split("").slice(0, 20).join("") + "..."
                : props.name}
            </Link>
          </h5>
          <h6 className="year">
            {props.release_date ? props?.release_date : props?.first_air_date}
          </h6>
        </div>
        <div className="bottom row">
          <span className="quality">HD</span>
          <span className="type">
            {" "}
            {mapGenres(props.genre_ids, genres).split(",")[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
