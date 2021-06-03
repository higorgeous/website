import { Theme } from '@/styles';
import styled from '@emotion/styled';

type WrapperProps = {
  length: number;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
  grid-column-gap: 70px;
  @media (max-width: ${Theme.responsive.large}) {
    grid-row-gap: 70px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  }
`;

export const Item = styled.div`
  position: relative;
  flex: 0 0 calc(16.66% - 20px);
`;

export const Icon = styled.div`
  width: 100%;
  height: 150px;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: block;
    img {
      width: 70%;
      height: 70%;
      margin: 0 auto;
      object-fit: contain !important;
      object-position: center center;
    }
  }
`;

export const Copy = styled.div`
  width: 100%;
  p {
    margin: 0;
    &:first-of-type {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
  }
`;
