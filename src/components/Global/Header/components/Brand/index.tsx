import React from 'react';

import Logo from '@/components/Library/Logo';

import { Wrapper } from './styles';

const Brand: React.FC<any> = () => (
  <Wrapper to="/">
    <Logo />
  </Wrapper>
);

export default Brand;
