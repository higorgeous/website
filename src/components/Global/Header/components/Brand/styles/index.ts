import styled from '@emotion/styled';
import { Link } from 'gatsby';

import globalTheme from '@/styles/Theme';

export const Wrapper = styled(Link)<{ isactive: string; theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  @media screen and (max-width: ${globalTheme.responsive.large}) {
    top: ${({ isactive }) => (isactive === `true` ? `4em` : `1.25em`)};
  }
  svg {
    width: 11em;
    margin-top: 0.6em;
    path {
      @media screen and (max-width: ${globalTheme.responsive.large}) {
        fill: currentColor;
      }
      @media screen and (min-width: ${globalTheme.responsive.large}) {
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4) {
          fill: ${({ theme }) =>
            theme.leftDark
              ? globalTheme.palette.light
              : globalTheme.palette.dark};
        }
        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(7),
        &:nth-of-type(8) {
          fill: ${({ theme }) =>
            theme.rightDark
              ? globalTheme.palette.light
              : globalTheme.palette.dark};
        }
      }
    }
  }
`;
