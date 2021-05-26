import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Content = styled.div`
  h1 {
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 90px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 60px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 40px;
    }
  }
`;
