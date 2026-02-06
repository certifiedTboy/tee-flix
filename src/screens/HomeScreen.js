import { Fragment } from "react";
import HomeHero from "../components/Home/HomeHero";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Fragment>
      <HomeHero />
      <Outlet />
    </Fragment>
  );
};

export default HomeScreen;
