import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      !pathname.includes("/Menu/Daily") &&
      !pathname.includes("/Menu/Monthly") &&
      !pathname.includes("/Menu/Weekly")
    ) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
