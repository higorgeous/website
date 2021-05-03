import React from 'react';

import { Wrapper } from './styles';
import Title from './components/Title';

type Props = {
  theme: any;
  seo: any;
};

const Left: React.FC<Props> = ({ theme, seo }: Props) => {
  const { leftColor } = theme;
  return (
    <Wrapper color={leftColor}>
      <Title {...seo} />
    </Wrapper>
  );
};

export default Left;
