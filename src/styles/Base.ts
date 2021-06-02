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
    @media (min-width: ${Theme.responsive.large}) {
      cursor: none !important;
    }
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  &::selection {
    background: #f6e4f7;
    color: ${Theme.palette.dark};
    text-shadow: none;
  }

  body {
    position: relative;
    margin: 0;
    overflow-x: hidden;
    min-height: 100%;
    box-sizing: inherit;
    text-align: center;
    &.menu {
      overflow: hidden;
    }
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
