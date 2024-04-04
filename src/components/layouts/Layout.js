import { Fragment, useState } from "react";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>

      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
