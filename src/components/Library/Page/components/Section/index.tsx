import React, { useState } from 'react';
import chroma from 'chroma-js';

import { Theme } from '@/styles';

import Richtext from './components/Richtext';
import BackgroundImage from './components/BackgroundImage';
import BackgroundImagesHover from './components/BackgroundImagesHover';
import BackgroundVideo from './components/BackgroundVideo';

import { Wrapper, Container } from './styles';

type Props = {
  type: string;
  backgroundColor: string;
  width: string;
  richtext?: any;
  image?: any;
  images?: any;
  video?: any;
};

const Section: React.FC<Props> = (section) => {
  const [activeImage, setActiveImage] = useState(null);
  const {
    type = `Default`,
    backgroundColor = `Alternative`,
    width = `Wide`,
    richtext = null,
    image = null,
    images = null,
    video = null,
  } = section;

  const colorDark =
    chroma(Theme.palette[backgroundColor.toLowerCase()]).get(`lab.l`) < 70;

  return (
    <Wrapper
      data-background={colorDark ? `dark` : null}
      backgroundColor={backgroundColor}
    >
      {richtext && (
        <Container isSmall={width === `Narrow`} colorDark={colorDark}>
          <Richtext
            colorDark={colorDark}
            setActiveImage={setActiveImage}
            {...section}
          />
        </Container>
      )}
      {image && type === `Default` && <BackgroundImage {...section} />}
      {image && type === `Opaque image` && (
        <BackgroundImage {...section} opaque />
      )}
      {images && type === `Hover images` && (
        <BackgroundImagesHover activeImage={activeImage} {...section} />
      )}
      {video && <BackgroundVideo {...section} />}
    </Wrapper>
  );
};
export default Section;
