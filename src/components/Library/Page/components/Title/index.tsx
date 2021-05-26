import React from 'react';
import chroma from 'chroma-js';

import { Theme } from '@/styles';

import BackgroundImage from './components/BackgroundImage';
import BackgroundVideo from './components/BackgroundVideo';

import { Wrapper, Shadow, PageTitle } from './styles';

type Props = {
  title: string;
  backgroundColor: string;
  images?: any;
};

const Title: React.FC<Props> = (hero) => {
  const { title, backgroundColor = `Alternative`, images } = hero;
  const shadows = [1, 2, 3];
  const colorDark =
    chroma(Theme.palette[backgroundColor.toLowerCase()]).get(`lab.l`) < 70;

  return (
    <Wrapper
      data-background={colorDark ? `dark` : null}
      backgroundColor={backgroundColor}
    >
      {shadows.map((i) => (
        <Shadow key={i} colorDark={colorDark}>
          <h1>{title}</h1>
        </Shadow>
      ))}
      <PageTitle colorDark={colorDark}>{title}</PageTitle>
      {images && images.length === 1 && <BackgroundImage {...hero} />}
      {images && images.length > 1 && <BackgroundVideo {...hero} />}
    </Wrapper>
  );
};
export default Title;
