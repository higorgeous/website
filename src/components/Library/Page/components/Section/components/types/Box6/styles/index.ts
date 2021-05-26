import { Theme } from '@/styles';
import styled from '@emotion/styled';

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
  h2 {
    font-size: 50px;
    text-transform: uppercase;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 30px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 20px;
    }
  }
  img {
    width: 760px;
    max-width: 90%;
  }
`;
