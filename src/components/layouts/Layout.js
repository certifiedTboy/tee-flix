import { Fragment } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import AppRoutes from "./AppRoutes";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
        <SideBar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
