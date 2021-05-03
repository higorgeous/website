import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.section<{ color: string }>`
  position: absolute;
  right: 0;
  display: flex;
  width: 50vw;
  height: 158vw;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ color }) => color || `transparent`};
  @media screen and (max-width: ${theme.responsive.large}) {
    display: flex;
    width: 100vw;
    height: 397vw;
    max-height: 397vw;
    min-height: 397vw;
    padding-right: 8vw;
    padding-bottom: 0;
    padding-left: 8vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (max-width: ${theme.responsive.small}) {
    height: auto;
    max-height: none;
    min-height: auto;
    padding-right: 6vw;
    padding-bottom: 17vw;
    padding-left: 6vw;
  }
`;
