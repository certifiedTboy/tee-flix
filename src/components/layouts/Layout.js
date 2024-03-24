import { Fragment, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import AppRoutes from "./AppRoutes";
import SearchMovie from "./SearchMovie";

const Layout = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    if (!showDrawer) {
      return setShowDrawer(true);
    }

    setShowDrawer(false);
  };
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <aside>
        {" "}
        <SideBar toggleDrawer={toggleDrawer} />
        <SearchMovie showDrawer={showDrawer} onToggleDrawer={toggleDrawer} />
      </aside>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
