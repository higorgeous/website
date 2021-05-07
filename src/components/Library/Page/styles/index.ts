import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  @media screen and (max-width: ${theme.responsive.large}) {
    display: block;
  }
`;
