import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div`
  padding-top: 22em;
  @media screen and (max-width: ${theme.responsive.large}) {
    padding-top: 0;
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.div`
  position: sticky;
  top: 10em;
  z-index: 1;
  padding-top: 0.8em;
  padding-bottom: 3em;
  font-family: ${theme.font.header};
  color: currentColor;
  font-size: 2.25em;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Body = styled.div`
  display: flex;
  // max-width: 30em;
  padding-top: 1.5em;
  flex-direction: column;
  p {
    margin-bottom: 2em;
    font-family: ${theme.font.header};
    color: currentColor;
    font-size: 1.6em;
    line-height: 1.5;
    font-weight: 300;
  }
  .gatsby-image-wrapper {
    margin-bottom: 5em;
  }
`;
