import styled from '@emotion/styled';
import { Link } from 'gatsby';

import theme from '@/styles/Theme';
import { css } from '@emotion/react';

export const buttonStyles: any = (
  isFilled: boolean,
  isFullWidth: boolean,
  inline: boolean,
) => css`
  position: relative;
  margin-top: 1em;
  padding: 1em 2em;
  font-family: ${theme.font};
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
  ${inline &&
  css`
    padding: 1em 2em;
    font-size: 1.25em;
    &:nth-of-type(2) {
      border: 1px solid ${theme.palette.dark};
      background-color: ${theme.palette.dark};
      color: ${theme.palette.light};
      &:hover {
        color: ${theme.palette.dark};
      }
    }
  `}
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.light};
    transform: translateY(-102%);
    transition: transform 0.2s;
    z-index: 0;
  }
  &:hover {
    color: ${theme.palette.dark};
    &::before {
      transform: translateY(0);
    }
  }
  span {
    margin: 1em auto 0.8em;
    z-index: 1;
  }
`;

export const BtnDiv = styled.div<{
  isFilled: boolean;
  isFullWidth: boolean;
  inline: boolean;
}>`
  ${({ isFilled, isFullWidth, inline }) =>
    buttonStyles(isFilled, isFullWidth, inline)}
`;

export const BtnLink = styled(Link)<{
  isFilled: boolean;
  isFullWidth: boolean;
  inline: boolean;
}>`
  ${({ isFilled, isFullWidth, inline }) =>
    buttonStyles(isFilled, isFullWidth, inline)}
  text-decoration: none;
`;

export const BtnAnchor = styled.a<{
  isFilled: boolean;
  isFullWidth: boolean;
  inline: boolean;
}>`
  ${({ isFilled, isFullWidth, inline }) =>
    buttonStyles(isFilled, isFullWidth, inline)}
  text-decoration: none;
`;

export const InlineWrapper = styled.span`
  display: block;
  margin-bottom: 0.5em;
  font-size: 14px;
  a {
    margin-top: 0 !important;
  }
`;
