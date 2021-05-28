import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Wrapper = styled.div`
  position: fixed;
  width: 50%;
  top: 24px;
  left: 28px;
  pointer-events: auto;
  z-index: 10000;
  @media (min-width: ${Theme.responsive.medium}) {
    top: 48px;
    left: 56px;
  }
`;

export const Container = styled.div`
  max-width: 140px;
  top: 0;
  left: 0;
  color: ${Theme.palette.light};
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
