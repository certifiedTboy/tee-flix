import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Layout scrollTop={scrollTop} />;
};

export default App;
