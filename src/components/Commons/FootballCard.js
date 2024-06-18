import { Link } from "react-router-dom";

const FootballCard = (props) => {
  return (
    <div className="single-movie">
      <div className="movie-poster">
        <img
          src={
            props.country_logo
              ? props.country_logo
              : "https://via.placeholder.com/92x138.png?text=No+Cover"
          }
          alt={`${props.country_name} logo`}
        />
        <ul className="overlay-btns">
          <li>
            <Link
              className="btn details-btn"
              to={`/football-match/${props.country_id}/competitions`}
            >
              Details
            </Link>
          </li>
        </ul>
      </div>
      <div className="movie-content">
        <div className="top row">
          <h5 className="title">
            <Link
              className="link"
              to={`/football-match/${props.country_id}/competitions`}
            >
              {props?.country_name}
            </Link>
          </h5>
          {/* <h6 className="year">
            {props.release_date ? props?.release_date : props?.first_air_date}
          </h6> */}
        </div>
        <div className="bottom row">
          <span className="quality">Live</span>
          <span className="type">Football</span>
        </div>
      </div>
    </div>
  );
};

export default FootballCard;
