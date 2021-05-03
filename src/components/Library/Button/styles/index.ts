import styled from '@emotion/styled';
import { Link } from 'gatsby';

import theme from '@/styles/Theme';
import { css } from '@emotion/react';

export const buttonStyles: any = (
  isFilled: boolean,
  isFullWidth: boolean,
) => css`
  position: relative;
  z-index: 2;
  margin-top: 1em;
  padding: 1em 2em;
  font-family: ${theme.font.header};
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${isFilled ? theme.palette.dark : theme.palette.dark};
  background-color: ${isFilled ? theme.palette.dark : `transparent`};
  transition: border-color 0.2s, color 0.2s;
  color: ${isFilled ? theme.palette.light : theme.palette.dark};
  width: ${isFullWidth ? `100%` : `auto`};
  height: 2.5em;
  overflow: hidden;
  cursor: pointer;
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
  span {
    margin: 1em auto 0.8em;
  }
`;

export const BtnDiv = styled.div<{
  isFilled: boolean;
  isFullWidth: boolean;
}>`
  ${({ isFilled, isFullWidth }) => buttonStyles(isFilled, isFullWidth)}
`;

export const BtnLink = styled(Link)<{
  isFilled: boolean;
  isFullWidth: boolean;
}>`
  ${({ isFilled, isFullWidth }) => buttonStyles(isFilled, isFullWidth)}
  text-decoration: none;
`;

export const BtnAnchor = styled.a<{
  isFilled: boolean;
  isFullWidth: boolean;
}>`
  ${({ isFilled, isFullWidth }) => buttonStyles(isFilled, isFullWidth)}
  text-decoration: none;
`;
