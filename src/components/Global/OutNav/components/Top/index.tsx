import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { Logo, LogoMobile, LogoTablet } from '@/components/Library/Logo';
import { useWindowSize, useScrollPosition, getSectionRanges } from '@/utils';

import { Wrapper, Container } from './styles';

const Top: React.FC<any> = () => {
  const size = useWindowSize();
  const scrollPosition = useScrollPosition();
  const sectionRanges = getSectionRanges();

  const isDark = sectionRanges.some(
    (x) => scrollPosition > x.start - 61 && scrollPosition < x.finish - 61,
  );

  const [colorDark, setColorDark] = useState(isDark);

  useEffect(() => {
    setColorDark(isDark);
  }, [sectionRanges, scrollPosition]);

  return (
    <Wrapper>
      <Link to="/">
        <Container colorDark={colorDark}>
          {size.width > 960 && <Logo />}
          {size.width < 960 && size.width > 768 && <LogoTablet />}
          {size.width < 768 && <LogoMobile />}
        </Container>
      </Link>
    </Wrapper>
  );
};

export default Top;
