import styled from '@emotion/styled';

import { Theme } from '@/styles';

type WrapperProps = {
  colorDark: boolean;
  isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 25px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 28px 28px 0 0;
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
  @media (max-width: ${Theme.responsive.medium}) {
    top: 3px;
    right: 0;
  }
  svg {
    path {
      stroke: ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark};
      @media (max-width: ${Theme.responsive.large}) {
        transition: stroke 1s;
        stroke: ${({ isOpen }) => (isOpen ? Theme.palette.light : null)};
      }
    }
  }
`;
