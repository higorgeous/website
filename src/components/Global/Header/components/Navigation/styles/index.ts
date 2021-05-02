import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.nav`
  position: relative;
  @media screen and (max-width: ${theme.responsive.large}) {
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
    border: 1px solid ${theme.palette.light};
    transition: color 0.2s;
    font-family: ${theme.font.body};
    color: ${theme.palette.light};
    font-size: 1.1em;
    font-weight: 600;
    text-decoration: none;
    overflow: hidden;
    &[aria-current='page'] {
      color: ${theme.palette.dark};
      background: ${theme.palette.light};
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${theme.palette.light};
      transform: translateY(-100%);
      transition: transform 0.2s;
      z-index: -1;
    }
    &:hover {
      color: ${theme.palette.dark};
      &::before {
        transform: translateY(0);
      }
    }
  }
`;
