import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import { SEO } from "../../helpers/SEO";
import SearchMovies from "../movies/SearchMovies";
import BackToTop from "../Commons/BackToTop";
import "./Layout.css";

const Layout = ({ scrollTop }) => {
  const location = useLocation();

  const { pathname } = location;

  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let titleData;

  if (pathname === "/home" || pathname === "/") {
    titleData = {
      title: "Tee Flix - Home",
      metaDescription:
        "Home page of Tee Flix, Number one movie sreaming platform for tech enthusiast and movie lovers",
    };
  } else if (pathname === `/movies`) {
    titleData = {
      title: `Movies`,
      metaDescription: `All latest movies available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === `/series`) {
    titleData = {
      title: `Series and tv shows`,
      metaDescription: `All latest Series and tv shows available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === "/downloads") {
    titleData = {
      title: "Download App",
      metaDescription:
        "Download the Tee Flix app to enjoy unlimited movies and series on your device.",
    };
  } else if (pathname === `/movies/${pathname.split("/")[2]}`) {
    titleData = {
      title: `${pathname.split("/")[2]}`,
      metaDescription: `All latest movies available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === `/series/${pathname.split("/")[2]}`) {
    titleData = {
      title: `${pathname.split("/")[2]}`,
      metaDescription: `All latest series available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === `/search/${pathname.split("/")[2]}`) {
    titleData = {
      title: `Searched ${pathname.split("/")[2]}`,
      metaDescription: `${pathname.split("/")[2]}`,
    };
  } else if (pathname === `/movies/${pathname.split("/")[2]}/stream`) {
    titleData = {
      title: `Streaming ${pathname.split("/")[2]}`,
      metaDescription: `Streaming ${pathname.split("/")[2]}`,
    };
  } else if (pathname === `/series/${pathname.split("/")[2]}/stream`) {
    titleData = {
      title: `Streaming ${pathname.split("/")[2]}`,
      metaDescription: `Streaming ${pathname.split("/")[2]}`,
    };
  } else {
    titleData = {
      title: "404 Error - Page not found",
      metaDescription: "Page not found",
    };
  }

  SEO(titleData);

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
      <footer>
        {pathname !== "/movies" || (pathname !== "/series" && <Footer />)}
      </footer>

      <BackToTop scrollTop={scrollTop} />
    </Fragment>
  );
};

export default Layout;
