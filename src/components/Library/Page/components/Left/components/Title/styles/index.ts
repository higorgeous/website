import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 3em;
  display: flex;
  width: 100%;
  padding-right: 3em;
  padding-left: 3em;
  flex-direction: column;
  @media screen and (max-width: ${theme.responsive.large}) {
    position: relative;
    bottom: auto;
    padding-right: 2em;
    padding-left: 2em;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10em;
  @media screen and (max-width: ${theme.responsive.large}) {
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  font-family: Formulacondensed, sans-serif;
  color: #fff;
  font-size: 5em;
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Text = styled.div`
  font-family: Formulacondensed, sans-serif;
  color: #fff;
  font-size: 1.75em;
  line-height: 1.5;
  font-weight: 300;
  padding-top: 0.5em;
  @media screen and (min-width: ${theme.responsive.large}) {
    width: 40%;
  }
`;

export const Bottom = styled.div``;
