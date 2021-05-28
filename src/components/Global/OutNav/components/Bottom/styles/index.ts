import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Wrapper = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  @media (min-width: ${Theme.responsive.large}) {
    display: block;
  }
`;
