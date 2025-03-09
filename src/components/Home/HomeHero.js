import { Link } from "react-router-dom";
import "./Home.css";

const HomeHero = () => {
  return (
    <header className="page-header home-header intro">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">TeeFlix</h4>
          <h2 className="title">
            Unlimited {<span>Movie</span>} , TVs Shows, & More.
          </h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link className="btn" to="/movies">
              <i className="ri-arrow-right-line"></i>
              Explore Movies
            </Link>
            <Link
              className="btn"
              to="https://drive.google.com/uc?id=1V2VTo0Gmy9yTBnnZrH4E8PrDjhlrt-MK&export=download"
              download={true}
            >
              <i className="ri-arrow-right-line"></i>
              Download App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
