import React, { useEffect, useRef } from 'react';

import { isBrowser, useWindowSize } from '@/utils';
import { Wrapper } from './styles';

const Scroll: React.FC = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    if (isBrowser)
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 103;
    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  return (
    <Wrapper>
      <div ref={scrollingContainerRef}>{children}</div>
    </Wrapper>
  );
};

export default Scroll;
