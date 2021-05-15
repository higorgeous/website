import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div`
  padding-top: 22em;
  @media screen and (max-width: ${theme.responsive.large}) {
    padding-top: 1.25em;
  }
`;
