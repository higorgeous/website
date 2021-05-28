import { css } from '@emotion/react';

import { Theme } from '.';

export default css`
  html {
    background: ${Theme.palette.navigation};
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html *,
  body * {
    @media (min-width: ${Theme.responsive.small}) {
      cursor: none !important;
    }
  }

  &::selection {
    background: #f6e4f7;
    color: ${Theme.palette.dark};
    text-shadow: none;
  }

  body {
    margin: 0;
    text-align: center;
    overflow-x: hidden;
    &.menu {
      overflow: hidden;
    }
  }

  ul {
    margin: 0;
  }

  a {
    background: transparent;
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;
