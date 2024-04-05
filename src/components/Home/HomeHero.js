import { Link } from "react-router-dom";
import "./Home.css";

const HomeHero = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">TeeFlix</h4>
          <h2 className="title">
            Unlimited {<span>Movie</span>} , TVs Shows, & More.
          </h2>
          <Link className="btn" to="/movies">
            <i className="ri-arrow-right-line"></i>
            Explore Movies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
