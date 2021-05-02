import styled from '@emotion/styled';
import theme from '@/styles/Theme';
import { css } from '@emotion/react';

export const Wrapper = styled.div<{ isActive: boolean }>`
  width: 2em;
  height: 1em;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  @media screen and (min-width: ${theme.responsive.large}) {
    display: none;
  }
  span {
    display: block;
    position: absolute;
    height: 0.15em;
    width: 50%;
    background: currentColor;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease, background 0.8s ease;
    &:nth-of-type(even) {
      left: 50%;
    }
    &:nth-of-type(odd) {
      left: 0;
    }
    &:nth-of-type(1),
    &:nth-of-type(2) {
      top: 0;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      top: 0.5em;
    }
    &:nth-of-type(5),
    &:nth-of-type(6) {
      top: 1em;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      span {
        &:nth-of-type(1),
        &:nth-of-type(6) {
          transform: rotate(45deg);
        }
        &:nth-of-type(2),
        &:nth-of-type(5) {
          transform: rotate(-45deg);
        }
        &:nth-of-type(1) {
          left: 0;
          top: 2px;
        }
        &:nth-of-type(2) {
          left: calc(50% - 5px);
          top: 2px;
        }
        &:nth-of-type(3) {
          left: -50%;
          opacity: 0;
        }
        &:nth-of-type(4) {
          left: 100%;
          opacity: 0;
        }
        &:nth-of-type(5) {
          top: 12px;
        }
        &:nth-of-type(6) {
          left: calc(50% - 5px);
          top: 12px;
        }
      }
    `};
`;
