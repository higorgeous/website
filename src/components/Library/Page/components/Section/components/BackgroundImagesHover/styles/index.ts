import styled from '@emotion/styled';

type ImageProps = {
  isActive: boolean;
};

export const Image = styled.div<ImageProps>`
  position: absolute !important;
  height: 100vh;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? `0.99` : `0`)} !important;
  visibility: ${({ isActive }) => (isActive ? `visible` : `hidden`)};
  > div {
    position: absolute !important;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
`;
