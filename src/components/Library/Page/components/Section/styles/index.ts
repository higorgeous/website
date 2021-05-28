import styled from '@emotion/styled';

import { Theme } from '@/styles';

type WrapperProps = {
  backgroundColor: string;
};

type ContainterProps = {
  isSmall: boolean;
  colorDark: boolean;
};

export const Wrapper = styled.section<WrapperProps>`
  height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: -1px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) =>
    Theme.palette[backgroundColor.toLowerCase()]};
`;

export const Container = styled.div<ContainterProps>`
  width: 100%;
  max-width: ${({ isSmall }) => (isSmall ? `800` : `1028`)}px;
  margin: 0 auto;
  padding: 0 30px;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  transform: translateY(-25vh);
  z-index: 1;
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
`;