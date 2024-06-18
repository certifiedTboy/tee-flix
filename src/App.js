import { useState, useEffect } from "react";
import Layout from "./components/layouts/Layout";
import GoogleAdsense from "./helpers/GoogleAdsense";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GoogleAdsense />
      <Layout scrollTop={scrollTop} />
    </>
  );
};

export default App;
