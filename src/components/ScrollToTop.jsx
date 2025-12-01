// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Give the browser a tiny delay to render the new content
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth", // optional, remove if you want instant scroll
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
