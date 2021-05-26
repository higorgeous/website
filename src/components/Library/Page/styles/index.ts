import styled from '@emotion/styled';

import { Theme } from '@/styles';

type SectionWrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled.main`
  background-color: ${Theme.palette.light};
`;

export const SectionWrapper = styled.section<SectionWrapperProps>`
  height: 150vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: -1px;
  background: ${({ backgroundColor }) =>
    Theme.palette[backgroundColor.toLowerCase()]};
  padding: 0 30px;
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
  & > * {
    transform: translateY(-25vh);
  }
  &:last-of-type {
    height: 100vh;
    & > * {
      transform: translateY(0);
    }
  }
`;
