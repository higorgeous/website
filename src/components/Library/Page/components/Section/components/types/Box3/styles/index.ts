import styled from '@emotion/styled';

import { Theme } from '@/styles';

type ItemProps = {
  colorDark: boolean;
};

export const Title = styled.div`
  h1 {
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

export const Item = styled.span<ItemProps>`
  position: relative;
  display: block;
  width: max-content;
  margin: 0 auto;
  font-size: 60px;
  font-weight: 900;
  text-transform: uppercase;
  -webkit-text-stroke: 0.02em
    ${({ colorDark }) => (colorDark ? Theme.palette.light : Theme.palette.dark)};
  color: transparent;
  cursor: pointer;
  @media (max-width: ${Theme.responsive.large}) {
    font-size: 50px;
  }
  @media (max-width: ${Theme.responsive.medium}) {
    font-size: 40px;
  }
  @media (max-width: ${Theme.responsive.small}) {
    font-size: 30px;
  }
  &::before {
    position: absolute;
    display: inline;
    white-space: nowrap;
    top: 0px;
    left: 0px;
    content: attr(data-fill);
    width: 0px;
    -webkit-text-stroke: 0px;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.4, 1) 0s;
  }
  &:hover {
    &::before {
      background: ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark};
      background-clip: text;
      width: 100%;
    }
  }
`;
