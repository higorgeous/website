import styled from '@emotion/styled';

import { Theme } from '@/styles';

type ContainerProps = {
  colorDark: boolean;
};

export const Wrapper = styled.div`
  width: 200px;
  left: 0;
  right: 0;
  pointer-events: auto;
`;

export const Container = styled.div<ContainerProps>`
  max-width: 200px;
  top: 0;
  left: 0;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  svg {
    max-width: 100%;
    height: auto;
    border: 0;
    fill: currentColor;
    path {
      &.mark {
        fill: ${({ colorDark }) =>
          colorDark ? Theme.palette.light : Theme.palette.red};
      }
    }
  }
`;
