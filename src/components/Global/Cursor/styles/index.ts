import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Ring = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid ${Theme.palette.alternative};
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;

  transition-property: width, height, background-color, opacity, transform,
    mix-blend-mode;
  transition-duration: 300ms, 300ms, 300ms, 300ms, 300ms, 300ms;
  animation-timing-function: ease;
  will-change: width, height, transform, border;
  z-index: 99999;
  mix-blend-mode: difference;
  &.cursor--hidden {
    opacity: 0;
  }
  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(0.5);
    background-color: ${Theme.palette.alternative};
  }
  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.25);
    background-color: ${Theme.palette.alternative};
  }
  @media (max-width: ${Theme.responsive.medium}) {
    display: none !important;
  }
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${Theme.palette.alternative};
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
  &.cursor--hidden {
    opacity: 0;
  }
  &.cursor--link-hovered {
    display: none;
  }
  &.cursor--clicked {
    display: none;
  }
  @media (max-width: ${Theme.responsive.medium}) {
    display: none !important;
  }
`;
