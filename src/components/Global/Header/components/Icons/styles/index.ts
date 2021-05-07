import styled from '@emotion/styled';

import globalTheme from '@/styles/Theme';

export const Wrapper = styled.div<{ theme: { rightDark: boolean } }>`
  @media screen and (min-width: ${globalTheme.responsive.large}) {
    color: ${({ theme }) =>
      theme.rightDark ? globalTheme.palette.light : globalTheme.palette.dark};
  }
  a {
    transition: all 0.8s ease;
    float: right;
    svg {
      height: 3em;
    }
  }
`;
