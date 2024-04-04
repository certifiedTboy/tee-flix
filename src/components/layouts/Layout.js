import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import SearchMovies from "../movies/SearchMovies";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  const { pathname } = location;

  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Fragment>
      <header>
        <NavBar setShowSearch={setShowSearch} />
        <SearchMovies
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setCurrentPage={setCurrentPage}
        />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>{pathname !== "/movies" && <Footer />}</footer>
    </Fragment>
  );
};

export default Layout;
