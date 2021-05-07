import styled from '@emotion/styled';
import chroma from 'chroma-js';

import theme from '@/styles/Theme';

export const Wrapper = styled.section<{ color: string }>`
  display: block;
  height: 100vh;
  padding: 0 4em;
  overflow: scroll;
  color: ${({ color }) =>
    chroma(color).get(`lab.l`) > 70 ? theme.palette.dark : theme.palette.light};
  background-color: ${({ color }) => color || `transparent`};
  @media screen and (max-width: ${theme.responsive.large}) {
    overflow: visible;
    height: 100%;
    padding: 0 2em;
  }
`;
