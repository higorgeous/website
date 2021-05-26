import { css } from '@emotion/react';

export default css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    position: relative;
    box-sizing: inherit;
    min-height: 100%;
    margin: 0;
  }

  footer,
  header,
  section,
  div {
    display: block;
  }

  image {
    max-width: 100%;
    height: auto;
    border: 0;
  }

  video {
    vertical-align: middle;
  }
`;
