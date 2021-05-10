import styled from '@emotion/styled';
import chroma from 'chroma-js';

import theme from '@/styles/Theme';

export const Wrapper = styled.section<{ color: string }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100vh;
  color: ${({ color }) =>
    chroma(color).get(`lab.l`) > 70 ? theme.palette.dark : theme.palette.light};
  background-color: ${({ color }) => color || `transparent`};
  overflow: hidden;
  @media screen and (max-width: ${theme.responsive.large}) {
    height: 500px;
  }
`;
