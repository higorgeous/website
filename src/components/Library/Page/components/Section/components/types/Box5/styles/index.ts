import styled from '@emotion/styled';

import { Theme } from '@/styles';

type ItemProps = {
  colorDark: boolean;
};

export const Content = styled.div<ItemProps>`
  h3 {
    font-weight: 800;
    -webkit-text-stroke: 0.02em
      ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark};
    color: transparent;
    text-transform: uppercase;
    font-size: 48px;
    word-spacing: 10px;
    margin: 0;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 35px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 30px;
    }
  }
`;
