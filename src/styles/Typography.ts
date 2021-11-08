import { css } from '@emotion/react';

import { Theme } from '@/styles';

export default css`
  html {
    font-family: ${Theme.font};
    font-size: 22px;
    line-height: 1.25;
    font-weight: 200;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0 0 32px;
    padding: 0;
  }

  h1,
  h2 {
    &.outline {
      -webkit-text-stroke: 0.02em ${Theme.palette.dark};
      color: transparent;
      &.dark {
        -webkit-text-stroke: 0.02em ${Theme.palette.light};
      }
      &.hover {
        position: relative;
        display: block;
        width: max-content;
        margin: 0 auto;
        cursor: pointer;
        &::before {
          position: absolute;
          display: inline;
          white-space: nowrap;
          top: 0px;
          left: 0px;
          content: attr(data-fill);
          width: 0px;
          -webkit-text-stroke: 0px;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.7s cubic-bezier(0.19, 1, 0.4, 1) 0s;
        }

        &:hover {
          &::before {
            background: ${Theme.palette.dark};
            background-clip: text;
            width: 100%;
          }
        }
        &.dark {
          &:hover {
            &::before {
              background: ${Theme.palette.light};
              background-clip: text;
            }
          }
        }
      }
    }
  }

  * + p {
    margin-top: 32px;
  }

  h1 {
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 90px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 60px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
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
    font-size: 40px;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 35px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 30px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 25px;
    }
    &.alternative {
      font-weight: 400;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 18px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 16px;
    }
    strong {
      font-weight: 600;
    }
    i {
      font-style: italic;
    }
    u {
      text-decoration: underline;
    }
  }

  ul {
    margin: 0;
  }

  a {
    background: transparent;
    color: currentColor;
    cursor: pointer;
    &.no-style {
      text-decoration: none;
    }
    &.button {
      position: relative;
      display: inline-block;
      width: 250px;
      padding: 10px 20px;
      margin: 10px 20px;
      border: 2px solid ${Theme.palette.dark};
      background-image: linear-gradient(
        to right,
        ${Theme.palette.dark},
        ${Theme.palette.dark} 50%,
        transparent 50%
      );
      background-size: 200% 100%;
      background-position: 100%;
      transition: all 0.5s cubic-bezier(0, 0, 0.23, 1);
      border-radius: 6px;
      font-weight: 900;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      @media (max-width: ${Theme.responsive.medium}) {
        font-size: 90%;
        margin: 10px auto;
      }
      &:hover {
        color: ${Theme.palette.light};
        background-position: 0%;
      }
      &.dark {
        border: 2px solid ${Theme.palette.light};
        background-image: linear-gradient(
          to right,
          ${Theme.palette.light},
          ${Theme.palette.light} 50%,
          transparent 50%
        );
        &:hover {
          color: ${Theme.palette.dark};
        }
      }
    }
  }
`;
