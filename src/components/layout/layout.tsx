import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navbar";
import AppRoutes from "./app-routes";
import Footer from "./footer";
import PageMetadata from "@/components/common/page-meta-data";
import SearchMovies from "@/pages/movies/search-movies";
import BackToTop from "@/components/common/back-to-top";
import "./layout.css";

const Layout = ({ scrollTop }: { scrollTop: number }) => {
  const location = useLocation();

  const { pathname } = location;

  const [showSearch, setShowSearch] = useState(false);
  const [, setCurrentPage] = useState(1);

  let titleData;

  if (pathname === "/home" || pathname === "/") {
    titleData = {
      title: "Tee Flix - Home",
      description:
        "Home page of Tee Flix, Number one movie sreaming platform for tech enthusiast and movie lovers",
    };
  } else if (pathname === `/movies`) {
    titleData = {
      title: `Movies`,
      description: `All latest movies available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === `/series`) {
    titleData = {
      title: `Series and tv shows`,
      description: `All latest Series and tv shows available for streaming on tee flix streaming platform`,
    };
  } else if (pathname === "/downloads") {
    titleData = {
      title: "Download App",
      description:
        "Download the Tee Flix app to enjoy unlimited movies and series on your device.",
    };
  } else if (
    pathname === `/movies/${pathname.split("/")[2]}/${pathname.split("/")[3]}`
  ) {
    titleData = {
      title: `${decodeURIComponent(pathname.split("/")[3])}`,
      description: `details about ${decodeURIComponent(pathname.split("/")[3])}`,
    };
  } else if (
    pathname === `/series/${pathname.split("/")[2]}/${pathname.split("/")[3]}`
  ) {
    titleData = {
      title: `${decodeURIComponent(pathname.split("/")[3])}`,
      description: `Details about ${decodeURIComponent(pathname.split("/")[3])}`,
    };
  } else if (pathname === `/search/${pathname.split("/")[2]}`) {
    titleData = {
      title: `Searched ${pathname.split("/")[2]}`,
      description: `${pathname.split("/")[2]}`,
    };
  } else if (
    pathname ===
    `/movies/${pathname.split("/")[2]}/${pathname.split("/")[3]}/stream`
  ) {
    titleData = {
      title: `Streaming ${decodeURIComponent(pathname.split("/")[3])}`,
      description: `Streaming ${decodeURIComponent(pathname.split("/")[3])}`,
    };
  } else if (
    pathname ===
    `/series/${pathname.split("/")[2]}/${pathname.split("/")[3]}/stream`
  ) {
    titleData = {
      title: `Streaming ${decodeURIComponent(pathname.split("/")[3])}`,
      description: `Streaming ${decodeURIComponent(pathname.split("/")[3])}`,
    };
  } else {
    titleData = {
      title: "404 Error - Page not found",
      description: "Page not found",
    };
  }

  PageMetadata(titleData);

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
        {pathname !== "/movies" && pathname !== "/series" && <Footer />}
      </footer>

      <BackToTop scrollTop={scrollTop} />
    </Fragment>
  );
};

export default Layout;
