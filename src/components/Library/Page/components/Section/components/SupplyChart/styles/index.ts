import { Theme } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  height: 400px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 2;
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
`;
