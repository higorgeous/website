import { css } from '@emotion/react';

import theme from './Theme';

export default css`
  body {
    margin: 0;
    min-height: 100%;
    background-color: ${theme.palette.dark};
    font-family: ${theme.font.body};
    color: ${theme.palette.dark};
    font-size: 14px;
    line-height: 20px;
  }
`;
