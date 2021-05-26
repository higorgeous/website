import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { Logo, LogoMobile, LogoTablet } from '@/components/Library/Logo';
import { useWindowSize, useScrollPosition, getSectionRanges } from '@/utils';

import { Wrapper, Container } from './styles';
import Right from './components/Right';

const Top: React.FC<any> = () => {
  const size = useWindowSize();
  const scrollPosition = useScrollPosition();
  const sectionRanges = getSectionRanges();

  const adjustment = size.width > 768 ? 61 : 45;

  const isDark = sectionRanges.some(
    (x) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
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
          <Right colorDark={colorDark} />
        </Container>
      </Link>
    </Wrapper>
  );
};

export default Top;
