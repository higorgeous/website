import styled from '@emotion/styled';

import { Theme } from '@/styles';

type ContainerProps = {
  colorDark: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  pointer-events: auto;
`;

export const Container = styled.div<ContainerProps>`
  max-width: 140px;
  top: 0;
  left: 0;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  @media (min-width: ${Theme.responsive.medium}) {
    max-width: 350px;
  }
  @media (min-width: ${Theme.responsive.large}) {
    max-width: 400px;
  }
  svg {
    max-width: 100%;
    height: auto;
    border: 0;
    fill: currentColor;
  }
`;
