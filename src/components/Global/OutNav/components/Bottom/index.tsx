import React from 'react';

import Left from './components/Left';
import Right from './components/Right';

import { Wrapper } from './styles';

const Bottom: React.FC<any> = ({ darkRanges, scrollPosition }) => (
  <Wrapper>
    <Left scrollPosition={scrollPosition} darkRanges={darkRanges} />
    <Right scrollPosition={scrollPosition} darkRanges={darkRanges} />
  </Wrapper>
);

export default Bottom;
