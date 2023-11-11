import { Theme } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    .background {
      position: fixed;
      top: -100px;
      left: -100px;
      bottom: 0;
      width: 100%;
      background: ${Theme.palette.red};
      z-index: 9998;
      @media (max-width: ${Theme.responsive.large}) {
        width: calc(100% + 100px);
      }
    }
  }
`;
