import { css } from '@emotion/react';

import { Theme } from '.';

export default css`
  html {
    background: ${Theme.palette.light};
    box-sizing: border-box;
  }

  &::selection {
    background: ${Theme.palette.navigation};
    text-shadow: none;
  }

  body {
    margin: 0;
    text-align: center;
    overflow-x: hidden;
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
