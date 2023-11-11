import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Logo from '@/components/Library/Logo/Logo';

import { Wrapper, Container } from './styles';

const Top: React.FC<any> = ({ darkRanges, windowSize, scrollPosition }) => {
  const adjustment = windowSize.width > 768 ? 61 : 45;

  const isDark = darkRanges.some(
    (x: { start: number; finish: number }) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
  );

  const [colorDark, setColorDark] = useState(isDark);

  useEffect(() => {
    setColorDark(isDark);
  }, [darkRanges, scrollPosition]);

  return (
    <Wrapper>
      <Link
        to="/"
        title="Gorgeous home page"
        aria-label="Gorgeous home page"
        aria-current="page"
      >
        <Container colorDark={colorDark}>
          <Logo />
        </Container>
      </Link>
    </Wrapper>
  );
};

export default Top;
