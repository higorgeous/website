import React from 'react';

import { Wrapper } from './styles';
import Content from './components/Content';
import BackgroundImage from './components/BackgroundImage';

const Left: React.FC<any> = (queries: any) => {
  const { theme, seo, title } = queries;
  const { leftColor, backgroundImage = {} } = theme;
  return (
    <Wrapper color={leftColor}>
      <Content title={title} seo={seo} />
      {backgroundImage && <BackgroundImage backgroundImage={backgroundImage} />}
    </Wrapper>
  );
};

export default Left;
