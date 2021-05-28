import { Theme } from '@/styles';
import styled from '@emotion/styled';

export const Ring = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid ${Theme.palette.alternative};
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width, height, background-color, opacity, transform,
    mix-blend-mode 300ms ease-in-out, top, left 70ms ease;
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
`;