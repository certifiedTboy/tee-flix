import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetGenresMutation } from "../../lib/apis/generalApis";

const NavBar = (props) => {
  const [getGenres] = useGetGenresMutation();

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <NavLink to="/movies" className="logo">
            <h1>Tee-Flix</h1>
          </NavLink>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/series">Series</NavLink>
            </li>
          </ul>
        </div>
        <div className="profile-container">
          <img className="profile-picture" src="img/profile.jpg" alt="" />
        </div>

        <div className="search-icon">
          <i className=" fas fa-search" onClick={props.toggleDrawer}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
