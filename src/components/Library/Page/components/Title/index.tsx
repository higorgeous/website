import React from 'react';
import chroma from 'chroma-js';

import { Theme } from '@/styles';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from './components/BackgroundImage';
import BackgroundVideo from './components/BackgroundVideo';
import HomeHero from './components/HomeHero';

import { Wrapper, Shadow, PageTitle } from './styles';

type Props = {
  innerRef: any;
  title: string;
  slug: string;
  backgroundColor: string;
  images?: any;
};

const Title: React.FC<Props> = (hero) => {
  const {
    title,
    backgroundColor = `Alternative`,
    images,
    innerRef,
    slug,
  } = hero;
  const shadows = [1, 2, 3];
  const colorDark =
    chroma(Theme.palette[backgroundColor.toLowerCase()]).get(`lab.l`) < 70;

  const data = useStaticQuery(
    graphql`
      query {
        navPages: contentfulInfoGlobalInformation(
          id: { eq: "62f30e7f-d2df-5fba-9384-d2656abd46b8" }
        ) {
          primaryNavigation {
            slug
          }
        }
      }
    `,
  );

  const navPages = data.navPages.primaryNavigation;
  const getIndex = navPages.findIndex((nav) => nav.slug === slug);

  const index = getIndex >= 0 ? getIndex + 1 : 0;

  return (
    <Wrapper
      ref={innerRef}
      data-background={colorDark ? `dark` : null}
      backgroundColor={backgroundColor}
    >
      {slug === `/` ? (
        <HomeHero title={title} colorDark={colorDark} />
      ) : (
        <>
          {shadows.map((i) => (
            <Shadow key={i} colorDark={colorDark}>
              <h1>{title}</h1>
            </Shadow>
          ))}
          <PageTitle
            colorDark={colorDark}
            data-section={index === 0 ? `` : `0${index}`}
          >
            {title}
          </PageTitle>
        </>
      )}

      {images && images.length === 1 && <BackgroundImage {...hero} />}
      {images && images.length > 1 && <BackgroundVideo {...hero} />}
    </Wrapper>
  );
};
export default Title;
