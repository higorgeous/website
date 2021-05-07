import styled from '@emotion/styled';

import globalTheme from '@/styles/Theme';

const getColor: any = (
  isActive: boolean,
  theme: { leftDark: boolean; rightDark: boolean },
  scrollColor: boolean,
) => {
  const themeColor = theme.leftDark
    ? globalTheme.palette.light
    : globalTheme.palette.dark;
  if (isActive) {
    return globalTheme.palette.dark;
  }
  if (!isActive && scrollColor) {
    return theme.rightDark
      ? globalTheme.palette.light
      : globalTheme.palette.dark;
  }
  return themeColor;
};

const getMobilePadding: any = (isActive: boolean, scrollColor: boolean) => {
  if (isActive) {
    return `5em 2em`;
  }
  if (!isActive && scrollColor) {
    return `0.5em 2em`;
  }
  return `2em`;
};

export const Wrapper = styled.header<{
  isActive: boolean;
  theme: any;
  scrollColor: boolean;
}>`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2em 3em;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ isActive, theme, scrollColor }) =>
    getColor(isActive, theme, scrollColor)};
  transition: padding 0.6s ease;
  z-index: 99;
  @media screen and (max-width: ${globalTheme.responsive.large}) {
    padding: ${({ isActive, scrollColor }) =>
      getMobilePadding(isActive, scrollColor)};
  }
  &:after {
    clear: both;
  }
`;
