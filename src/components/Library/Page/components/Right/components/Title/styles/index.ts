import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div<{ color: string; width: number }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `calc(${width}px - 8em)`};
  padding-top: 11em;
  background-color: ${({ color }) => color};
  z-index: 2;
  @media screen and (max-width: ${theme.responsive.large}) {
    position: sticky;
    top: 0;
    padding-top: 7em;
    width: ${({ width }) => `calc(${width}px - 4em)`};
  }
`;

export const Text = styled.h1`
  padding-bottom: 1em;
  margin-bottom: 0;
  font-family: ${theme.font.header};
  color: currentColor;
  font-size: 3.25em;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid currentColor;
  @media screen and (max-width: ${theme.responsive.large}) {
    font-size: 2em;
    padding-bottom: 0.5em;
  }
  span {
    &.alt {
      font-feature-settings: 'aalt';
    }
  }
`;
