import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
