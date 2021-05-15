import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: ${theme.responsive.small}) {
    grid-template-columns: 1fr;
    margin-top: -4em;
  }
`;

export const Title = styled.div<{ color: string }>`
  position: sticky;
  top: 10em;
  z-index: 1;
  margin-top: 0.8em;
  margin-bottom: 1.8em;
  font-family: ${theme.font.header};
  color: currentColor;
  background-color: ${({ color }) => color};
  font-size: 2.25em;
  font-weight: 400;
  text-transform: uppercase;
  @media screen and (max-width: ${theme.responsive.xlarge}) {
    font-size: 1.8em;
    top: 12em;
  }
  @media screen and (max-width: ${theme.responsive.large}) {
    font-size: 2.25em;
    top: 6.3em;
  }
  @media screen and (max-width: ${theme.responsive.small}) {
    top: 4.5em;
    margin-bottom: 0;
    padding-top: 1.25em;
    padding-bottom: 0.5em;
    background: #f9c3d0;
    border-bottom: 1px solid currentColor;
  }
`;

export const Body = styled.div`
  display: flex;
  // max-width: 30em;
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
  .gatsby-image-wrapper {
    margin-bottom: 5em;
  }
`;

export const QuoteHeading = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: 1em;
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

export const Blockquote = styled.div`
  padding: 1.5em;
  border: 1px solid currentColor;
  margin-bottom: 5em;
  p {
    margin-bottom: 1em !important;
    &:last-of-type {
      margin-bottom: 0 !important;
    }
  }
`;
