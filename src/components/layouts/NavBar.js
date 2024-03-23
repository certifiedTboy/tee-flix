const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">Tee-Flix</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item active">Home</li>
            <li className="menu-list-item">Movies</li>
            <li className="menu-list-item">Series</li>
            <li className="menu-list-item">Popular</li>
            <li className="menu-list-item">Trends</li>
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
