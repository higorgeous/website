import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${theme.responsive.large}) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  margin-top: 17px;
  font-family: ${theme.font.header};
  color: currentColor;
  font-size: 5em;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media screen and (max-width: ${theme.responsive.large}) {
    font-size: 4em;
  }
  span {
    &.alt {
      font-feature-settings: 'aalt';
    }
  }
`;

export const Text = styled.h3`
  margin-top: 10px;
  font-family: ${theme.font.header};
  color: currentColor;
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 1px;
  @media screen and (min-width: ${theme.responsive.large}) {
    font-size: 1.75em;
    width: 40%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  margin-top: 4em;
  @media screen and (max-width: ${theme.responsive.large}) {
    display: none;
  }
`;
