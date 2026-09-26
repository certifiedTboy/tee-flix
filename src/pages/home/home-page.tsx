import HomeHero from "./home-hero";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Outlet />
    </>
  );
};

export default HomePage;
