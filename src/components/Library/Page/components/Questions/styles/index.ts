import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Wrapper = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: ${Theme.palette.light};
  padding: 0 30px;
  @media (min-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
  @media (max-width: ${Theme.responsive.large}) and (max-height: 1000px) {
    padding: 0 20px;
  }
  & > div {
    padding: 100px 0;
    @media (max-height: 1000px) {
      margin: -80px 0;
      padding: 0;
      transform: scale(0.8);
    }

    @media (max-width: ${Theme.responsive.small}) and (max-height: 1000px) {
      margin: -100px 0;
    }
  }
`;
