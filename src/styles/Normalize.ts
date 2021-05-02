import { css } from '@emotion/react';

export default css`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    overflow: hidden;
    cursor: default;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
  }

  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  input[type='search'] {
    -webkit-appearance: none;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  legend {
    border: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  blockquote {
    margin: 0 0 10px;
    padding: 10px 20px;
    border-left: 5px solid #e2e2e2;
    font-size: 18px;
    line-height: 22px;
  }

  figure {
    margin: 0 0 10px;
  }

  figcaption {
    margin-top: 5px;
    text-align: center;
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }

  button,
  html input[type='button'],
  input[type='reset'] {
    -webkit-appearance: button;
    border: 0;
    cursor: pointer;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;
