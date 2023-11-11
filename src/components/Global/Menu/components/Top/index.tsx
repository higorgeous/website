import React from 'react';
import { Link } from 'gatsby';

import Logo from '@/components/Library/Logo/Logo';

import { Wrapper, Container } from './styles';

const Top: React.FC<any> = () => (
  <Wrapper>
    <Link
      to="/"
      title="Gorgeous home page"
      aria-label="Gorgeous home page"
      aria-current="page"
    >
      <Container>
        <Logo />
      </Container>
    </Link>
  </Wrapper>
);

export default Top;
