import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: ${theme.responsive.large}) {
    height: 500px;
  }
  .gatsby-image-wrapper {
    img {
      display: block;
      width: 100%;
      height: 100vh;
      @media screen and (max-width: ${theme.responsive.large}) {
        height: 500px;
      }
    }
  }
`;
