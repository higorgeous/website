import { Theme } from '@/styles';
import styled from '@emotion/styled';

type HeadingProps = {
  isOpen: boolean;
};

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  &:first-of-type {
    & > div {
      &:first-of-type {
        border-top: 1px solid ${Theme.palette.dark};
      }
    }
  }
`;

export const Heading = styled.div<HeadingProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${Theme.palette.dark};

  h5 {
    margin: 0;
  }
  img {
    width: 10px;
    height: 10px;
    transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `rotate(0)`)};
    transition: all 0.3s ease;
  }
`;

export const Body = styled.div`
  overflow: hidden;
  height: auto;
  max-height: 9999px;
  &.collapsed {
    padding: 0;
    max-height: 0;
  }
  & > div {
    padding: 50px 20px 20px;
    border-bottom: 1px solid ${Theme.palette.dark};
  }
`;
