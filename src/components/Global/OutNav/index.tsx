import React from 'react';

import Top from './components/Top';

import { Wrapper } from './styles';
import Bottom from './components/Bottom';

type Props = {
  darkRanges: any;
  windowSize: any;
  scrollPosition: any;
};

const OuterNav: React.FC<Props> = ({
  darkRanges,
  windowSize,
  scrollPosition,
}) => (
  <Wrapper>
    <Top
      darkRanges={darkRanges}
      windowSize={windowSize}
      scrollPosition={scrollPosition}
    />
    <Bottom darkRanges={darkRanges} scrollPosition={scrollPosition} />
  </Wrapper>
);

export default OuterNav;
