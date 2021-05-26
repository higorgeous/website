import { css } from '@emotion/react';

import { Theme } from '.';

export default css`
  html {
    background: ${Theme.palette.light};
    box-sizing: border-box;
  }

  body {
    margin: 0;
    text-align: center;
    overflow-x: hidden;
  }
`;
