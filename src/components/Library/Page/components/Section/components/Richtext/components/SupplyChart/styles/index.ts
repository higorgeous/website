import { Theme } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  z-index: 2;
  svg {
    text {
      font-family: ${Theme.font} !important;
      font-size: 50% !important;
      font-weight: 900 !important;
      text-transform: uppercase !important;
    }
  }
`;
