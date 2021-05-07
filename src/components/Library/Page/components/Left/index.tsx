import React from 'react';

import { Wrapper } from './styles';
import Content from './components/Content';

type Props = {
  theme: any;
  seo: any;
};

const Left: React.FC<Props> = ({ theme, seo }: Props) => {
  const { leftColor } = theme;
  return (
    <Wrapper color={leftColor}>
      <Content {...seo} />
    </Wrapper>
  );
};

export default Left;
