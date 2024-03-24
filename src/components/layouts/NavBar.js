import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetGenresMutation } from "../../lib/apis/generalApis";

const NavBar = () => {
  const [getGenres] = useGetGenresMutation();

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">Tee-Flix</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item active">
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/series">Series</NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/popular">Popular</NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/trends">Trends</NavLink>
            </li>
          </ul>
        </div>
        <div className="profile-container">
          <img className="profile-picture" src="img/profile.jpg" alt="" />
          <div className="profile-text-container">
            <span className="profile-text">Profile</span>
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="toggle">
            <i className="fas fa-moon toggle-icon"></i>
            <i className="fas fa-sun toggle-icon"></i>
            <div className="toggle-ball"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
