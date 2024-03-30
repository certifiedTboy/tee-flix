const SideBar = (props) => {
  const scrollBar = (event) => {
    // console.log(event);
  };

  window.addEventListener("scroll", scrollBar);
  return (
    <aside>
      <div className="sidebar">
        <i
          className="left-menu-icon fas fa-search"
          onClick={props.toggleDrawer}
        ></i>
        <i className="left-menu-icon fas fa-home"></i>
        <i className="left-menu-icon fas fa-users"></i>
        <i className="left-menu-icon fas fa-bookmark"></i>
        <i className="left-menu-icon fas fa-tv"></i>
        <i className="left-menu-icon fas fa-hourglass-start"></i>
        <i className="left-menu-icon fas fa-shopping-cart"></i>
      </div>
    </aside>
  );
};

export default SideBar;
