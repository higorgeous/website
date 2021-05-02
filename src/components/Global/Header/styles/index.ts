import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.header<{ isActive: boolean }>`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  right: 0;
  padding: 4em 3em;
  width: 100%;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  color: ${({ isActive }) =>
    isActive ? theme.palette.dark : theme.palette.light};
  z-index: 99;
  transition: padding 0.6s ease;
  @media screen and (max-width: ${theme.responsive.large}) {
    padding: ${({ isActive }) => (isActive ? `5em 2em` : `2em`)};
  }
  &:after {
    clear: both;
  }
`;
