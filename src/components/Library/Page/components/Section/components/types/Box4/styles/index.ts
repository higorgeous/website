import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Content = styled.div`
  h3 {
    font-size: 40px;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 35px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 30px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 25px;
    }
  }
`;
