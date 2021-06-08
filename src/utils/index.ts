/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';
import chroma from 'chroma-js';

import { Theme } from '@/styles';

// Check for window
export const isBrowser = typeof window !== `undefined`;

// Check for mobile device
export const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

// Send external click data to Segment
export const handleExternalClick = ({ uri, name }) => {
  if (isBrowser)
    (window as any).analytics.track(`External page clicked`, {
      uri,
      name,
    });
};

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
export const getDarkRanges = (
  sections: any[],
  titleRef: { current: { clientHeight: any; dataset: { background: string } } },
) => {
  const [darkRanges, setDarkRanges] = useState([]);

  // Get locations for dark sections
  useEffect(() => {
    const height = titleRef.current.clientHeight;
    const titleDark = titleRef.current.dataset.background === `dark`;
    const initRange = { start: 0, finish: height };
    const sectionLength = sections ? sections.length : 0;
    const nextIndex = sectionLength + 1;
    const nextStart = nextIndex * height;
    const nextFinish = nextStart + height;

    setDarkRanges((prevState) => (titleDark ? [...prevState, initRange] : []));
    // eslint-disable-next-line no-unused-expressions
    sections &&
      sections.forEach((section: any, index: number) => {
        const indexNew = index + 1;
        const start = indexNew * height;
        const finish = start + height;
        const dark =
          chroma(Theme.palette[section.backgroundColor.toLowerCase()]).get(
            `lab.l`,
          ) < 70;
        if (dark)
          setDarkRanges((prevState) => [...prevState, { start, finish }]);
      });
    setDarkRanges((prevState) => [
      ...prevState,
      { start: nextStart, finish: nextFinish },
    ]);
  }, []);
  return darkRanges;
};

// Get top and bottom ranges of FAQ section
export const getFaqRanges = (
  titleRef: { current: { clientHeight: any } },
  faqRef: { current: { clientHeight: any } },
) => {
  const [darkRanges, setDarkRanges] = useState([]);

  // Get locations for dark sections
  useEffect(() => {
    const start = titleRef.current.clientHeight + faqRef.current.clientHeight;
    const finish = start + titleRef.current.clientHeight;
    setDarkRanges([{ start, finish }]);
  }, []);
  return darkRanges;
};
