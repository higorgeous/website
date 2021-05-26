import React from 'react';

import { getDarkRanges, useWindowSize, useScrollPosition } from '@/utils';

import Top from './components/Top';

import { Wrapper } from './styles';

type Props = {
  sections: Array<any>;
  titleRef: any;
};

const OuterNav: React.FC<Props> = ({ sections, titleRef }) => {
  const darkRanges = getDarkRanges(sections, titleRef);
  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();
  return (
    <Wrapper>
      <Top
        darkRanges={darkRanges}
        windowSize={windowSize}
        scrollPosition={scrollPosition}
      />
    </Wrapper>
  );
};

export default OuterNav;
