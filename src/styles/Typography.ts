import { css } from '@emotion/react';

import { Theme } from '@/styles';

export default css`
  html {
    font-family: ${Theme.font};
    font-size: 22px;
    line-height: 1.25;
    font-weight: 200;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0 0 32px;
  }

  h1 {
    font-size: 80px;
    font-weight: 700;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 70px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 60px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 50px;
    }
  }

  h2 {
    font-size: 60px;
    font-weight: 700;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 50px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 30px;
    }
  }

  h3 {
    font-size: 35px;
    font-weight: 600;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 30px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 26px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 22px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 18px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 16px;
    }
  }

  p {
    margin: 0 0 32px;
  }

  * + p {
    margin-top: 32px;
  }
`;
