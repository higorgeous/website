import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.section<{ color: string }>`
  position: fixed;
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color || `transparent`};
  @media screen and (max-width: ${theme.responsive.large}) {
    position: relative;
    width: 100%;
    height: 60vh;
  }
`;
