import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>{pathname !== "/movies" && <Footer />}</footer>
    </Fragment>
  );
};

export default Layout;
