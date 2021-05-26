import styled from '@emotion/styled';

import { Theme } from '@/styles';
import { css } from '@emotion/react';

type WrapperProps = {
  menuPanel: boolean;
  colorDark: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  margin: 28px 28px 0 0;
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
  @media (max-width: ${Theme.responsive.medium}) {
    top: 5px;
    right: 0;
  }
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ colorDark }) =>
      colorDark ? Theme.palette.light : Theme.palette.dark};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out, background 0s;
    &:first-of-type {
      ${({ menuPanel }) =>
        menuPanel
          ? css`
              top: 6px;
              width: 0;
              left: 50%;
            `
          : css`
              top: 0;
            `}
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      top: 6px;
    }
    &:nth-of-type(2) {
      ${({ menuPanel }) =>
        menuPanel
          ? css`
              transform: rotate(45deg);
            `
          : css`
              transform: rotate(0);
            `}
    }
    &:nth-of-type(3) {
      ${({ menuPanel }) =>
        menuPanel
          ? css`
              transform: rotate(-45deg);
            `
          : css`
              transform: rotate(0);
            `}
    }
    &:last-of-type {
      ${({ menuPanel }) =>
        menuPanel
          ? css`
              top: 18px;
              width: 0;
              left: 50%;
            `
          : css`
              top: 12px;
            `}
    }
  }
`;
