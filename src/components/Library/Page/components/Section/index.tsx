import React, { ReactNode, useState } from 'react';
import chroma from 'chroma-js';

import { Theme } from '@/styles';

import { Box1, Box2, Box3, Box4, Box5, Box6, Box7 } from './components/types';
import BackgroundImage from './components/BackgroundImage';
import BackgroundImagesHover from './components/BackgroundImagesHover';
import BackgroundVideo from './components/BackgroundVideo';

import { Wrapper, Container } from './styles';

type Props = {
  type: string;
  backgroundColor: string;
  images?: any;
};

const Section: React.FC<Props> = (section) => {
  const [activeImage, setActiveImage] = useState(null);

  let component: ReactNode;

  const {
    type = null,
    backgroundColor = `Alternative`,
    images = null,
  } = section;
  const isSmallArray = [`Box 1`, `Box 5`];
  const isSmall = isSmallArray.includes(type);
  const colorDark =
    chroma(Theme.palette[backgroundColor.toLowerCase()]).get(`lab.l`) < 70;

  switch (type) {
    case `Box 1`:
      component = <Box1 {...section} />;
      break;
    case `Box 2`:
      component = <Box2 {...section} />;
      break;
    case `Box 3`:
      component = (
        <Box3
          setActiveImage={setActiveImage}
          colorDark={colorDark}
          {...section}
        />
      );
      break;
    case `Box 4`:
      component = <Box4 {...section} />;
      break;
    case `Box 5`:
      component = <Box5 colorDark={colorDark} {...section} />;
      break;
    case `Box 6`:
      component = <Box6 {...section} />;
      break;
    case `Box 7`:
      component = <Box7 {...section} />;
      break;
    default:
      component = null;
  }

  return (
    <Wrapper
      data-background={colorDark ? `dark` : null}
      backgroundColor={backgroundColor}
    >
      <Container isSmall={isSmall} colorDark={colorDark}>
        {component}
      </Container>
      {images && type === `Box 2` && <BackgroundImage {...section} />}
      {images && type === `Box 3` && (
        <BackgroundImagesHover activeImage={activeImage} {...section} />
      )}
      {images && type === `Box 7` && <BackgroundVideo {...section} />}
    </Wrapper>
  );
};
export default Section;
