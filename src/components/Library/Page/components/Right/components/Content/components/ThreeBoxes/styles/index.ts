import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Section = styled.div`
  display: flex;
  margin-top: 1.1em;
  flex-direction: column;
  p {
    margin-bottom: 2em;
    font-family: ${theme.font.header};
    color: currentColor;
    font-size: 1.7em;
    line-height: 1.35;
    font-weight: 300;

    @media screen and (max-width: ${theme.responsive.xlarge}) {
      font-size: 1.4em;
    }
    @media screen and (max-width: ${theme.responsive.large}) {
      font-size: 1.7em;
    }
    @media screen and (max-width: ${theme.responsive.small}) {
      font-size: 1.5em;
    }
  }
`;

export const Title = styled.div`
  display: inline-block;
  margin-left: 2em;
  margin-right: auto;
  border: 1px solid currentColor;
  border-bottom: none;
  width: fit-content;
  h4 {
    font-feature-settings: 'aalt';
    padding: 0 1em;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    word-spacing: 7px;
  }
`;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-auto-rows: 1fr;
  justify-content: space-between;
  @media screen and (max-width: ${theme.responsive.small}) {
    grid-template-columns: 1fr;
    grid-auto-rows: inherit;
    margin-bottom: 5em;
  }
`;

export const Box = styled.div`
  padding: 1.5em;
  border: 1px solid currentColor;
  border-right: none;
  margin-bottom: 5em;
  &:last-of-type {
    border-right: 1px solid currentColor;
  }
  @media screen and (max-width: ${theme.responsive.small}) {
    margin-bottom: 0;
    border-right: 1px solid currentColor;
    border-bottom: none;
    &:last-of-type {
      border-bottom: 1px solid currentColor;
    }
  }
  h3 {
    font-family: ${theme.font.header};
    font-size: 1.5em;
    font-weight: 700;
  }
  p {
    margin-bottom: 1em !important;
  }
`;
