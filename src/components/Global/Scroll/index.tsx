import React, { useCallback } from 'react';

import { isBrowser } from '@/utils';
import { Wrapper } from './styles';

const Scroll: React.FC = ({ children }) => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const smoothScrollingHandler = (node) => {
    data.current = isBrowser && window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 103;
    // eslint-disable-next-line no-param-reassign
    node.style.transform = `translateY(-${data.previous}px)`;
    requestAnimationFrame(() => smoothScrollingHandler(node));
  };

  const setRef = useCallback((node) => {
    if (isBrowser && node)
      document.body.style.height = `${node?.getBoundingClientRect().height}px`;
    if (node) requestAnimationFrame(() => smoothScrollingHandler(node));
  }, []);

  return (
    <Wrapper>
      <div ref={setRef}>{children}</div>
    </Wrapper>
  );
};

export default Scroll;
