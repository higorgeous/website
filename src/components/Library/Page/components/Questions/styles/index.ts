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
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
  & > div {
    @media (max-height: 1000px) {
      transform: scale(0.8);
    }
  }
`;
