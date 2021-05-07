import styled from '@emotion/styled';

import globalTheme from '@/styles/Theme';

export const Wrapper = styled.nav<{ theme: { leftDark: boolean } }>`
  position: relative;
  @media screen and (max-width: ${globalTheme.responsive.large}) {
    display: none;
  }
  a {
    max-width: 100%;
    width: auto;
    height: 3em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: -1px;
    margin-left: 0;
    padding: 0.6vw 2vw;
    border: 1px solid
      ${({ theme }) =>
        theme.leftDark ? globalTheme.palette.light : globalTheme.palette.dark};
    transition: color 0.2s;
    font-family: ${globalTheme.font.body};
    color: ${({ theme }) =>
      theme.leftDark ? globalTheme.palette.light : globalTheme.palette.dark};
    font-size: 1.1em;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    &[aria-current='page'] {
      pointer-events: none;
      color: ${({ theme }) =>
        theme.leftDark ? globalTheme.palette.dark : globalTheme.palette.light};
      &::before {
        transform: translateY(0);
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) =>
        theme.leftDark ? globalTheme.palette.light : globalTheme.palette.dark};
      transform: translateY(-100%);
      transition: transform 0.2s;
      z-index: -1;
    }
    &:hover {
      color: ${({ theme }) =>
        theme.leftDark ? globalTheme.palette.dark : globalTheme.palette.light};
      &::before {
        transform: translateY(0);
      }
    }
  }
`;
