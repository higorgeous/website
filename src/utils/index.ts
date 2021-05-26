/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

// Check for window
export const isBrowser = typeof window !== `undefined`;

// Get window size
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (isBrowser) window.addEventListener(`resize`, handleResize);

    handleResize();
    return () => {
      if (isBrowser) window.removeEventListener(`resize`, handleResize);
    };
  }, []);
  return windowSize;
};

// Get scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = isBrowser ? window.pageYOffset : null;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (isBrowser)
      window.addEventListener(`scroll`, handleScroll, { passive: true });
    return () => {
      if (isBrowser) window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);
  return scrollPosition;
};

// Get top and bottom ranges of section panels
export const getSectionRanges = () => {
  const [ranges, setRanges] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(`section#dark`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { boundingClientRect } = entry;
        const { top, bottom } = boundingClientRect;
        const start = top;
        const finish = bottom;
        setRanges((prevState) => [...prevState, { start, finish }]);
      });
      sections.forEach((section) => observer.unobserve(section));
    });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return ranges;
};
