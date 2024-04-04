import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { mapGenres } from "../../helpers/helpers";
import { useEffect } from "react";
import "./Movie.css";

const IMAGES_PATH = process.env.REACT_APP_IMAGE_PATH;

const MovieCard = (props) => {
  const { genres } = useSelector((state) => state.genreState);

  return (
    <div className="single-movie">
      <div className="movie-poster">
        <img
          src={`${IMAGES_PATH}/w300${props.poster_path}`}
          alt="movie-poster"
        />
        <ul className="overlay-btns">
          <li>
            <Link className="btn details-btn" to={`/movie/${props.id}`}>
              Details
            </Link>
          </li>
        </ul>
      </div>
      <div className="movie-content">
        <div className="top row">
          <h5 className="title">
            <Link className="link" to={`/movie/${props.id}`}>
              {props.title.length > 20
                ? props.title.split("").slice(0, 20).join("") + "..."
                : props.title}
            </Link>
          </h5>
          <h6 className="year">{props.release_date}</h6>
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
