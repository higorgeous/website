import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Theme } from '@/styles';

type WrapperProps = {
  backgroundColor: string;
};

type ShadowProps = {
  colorDark: boolean;
};

type TitleProps = {
  colorDark: boolean;
};

export const Wrapper = styled.section<WrapperProps>`
  height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: -1px;
  background: ${({ backgroundColor }) =>
    Theme.palette[backgroundColor.toLowerCase()]};
  padding: 0 30px;
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
  & > * {
    transform: translateY(-25vh);
  }
`;

const slideUp = keyframes({
  '0%': {
    transform: `translateY(55%)`,
  },
  '100%': {
    transform: `translateY(0)`,
  },
});

export const Shadow = styled.div<ShadowProps>`
  overflow: hidden;
  z-index: 1;
  h1 {
    margin: 0;
    padding: 0;
    line-height: 1;
    position: relative;
    animation-timing-function: cubic-bezier(0.19, 1, 0.4, 1);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    transform: translateY(55%);
    backface-visibility: hidden;
    color: transparent;
    margin-bottom: -0.4em;
    animation: ${slideUp} 0.75s;
    animation-fill-mode: forwards;
    animation-delay: 0.25s;
    -webkit-text-stroke: 0.02em
      ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark};
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 50px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 30px;
    }
  }
`;

export const PageTitle = styled.h1<TitleProps>`
  font-size: 60px;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  z-index: 1;
  @media (max-width: ${Theme.responsive.large}) {
    font-size: 50px;
  }
  @media (max-width: ${Theme.responsive.medium}) {
    font-size: 40px;
  }
  @media (max-width: ${Theme.responsive.small}) {
    font-size: 30px;
  }
  &::after {
    display: block;
    -webkit-text-stroke: 0px;
    -webkit-text-fill-color: ${({ colorDark }) =>
      colorDark ? Theme.palette.light : Theme.palette.dark};
    content: attr(data-section);
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 25px;
    transform: translate(-45px, 6px);
    letter-spacing: 2px;
    @media (max-width: ${Theme.responsive.large}) {
      display: none;
    }
  }
`;
