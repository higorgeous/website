import { Theme } from '@/styles';
import styled from '@emotion/styled';

type WrapperProps = {
  colorDark: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 350px;
  z-index: 2;
  svg {
    text {
      font-family: ${Theme.font} !important;
      font-size: 50% !important;
      font-weight: 900 !important;
      text-transform: uppercase !important;
      fill: ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark} !important;
    }
  }
`;
