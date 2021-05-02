import { css } from '@emotion/react';

export default css`
  a {
    background-color: transparent;
    text-decoration: underline;
    color: currentColor;
    &:active,
    &:hover {
      outline: 0;
    }
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  strong {
    font-weight: 700;
  }

  dfn {
    font-style: italic;
  }

  small {
    font-size: 80%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 38px;
    line-height: 44px;
    margin-top: 20px;
  }

  h2 {
    font-size: 32px;
    line-height: 36px;
    margin-top: 20px;
  }

  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-top: 20px;
  }

  h4 {
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
  }

  h5 {
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
  }

  h6 {
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  textarea {
    overflow: auto;
  }

  code {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;
