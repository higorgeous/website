import React from 'react';
import { Link } from 'gatsby';

import { LogoDesktop, LogoMobile, LogoTablet } from '@/components/Library/Logo';

import { Wrapper, Container } from './styles';

const Top: React.FC<any> = ({ windowSize }) => (
  <Wrapper>
    <Link
      to="/"
      title="Gorgeous home page"
      aria-label="Gorgeous home page"
      aria-current="page"
    >
      <Container>
        {windowSize.width > 960 && <LogoDesktop />}
        {windowSize.width < 960 && windowSize.width > 768 && <LogoTablet />}
        {windowSize.width < 768 && <LogoMobile />}
      </Container>
    </Link>
  </Wrapper>
);

export default Top;
