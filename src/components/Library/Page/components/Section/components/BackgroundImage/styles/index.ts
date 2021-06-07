import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

type ImageProps = {
  opaque?: boolean;
};

export const Image = styled(BackgroundImage)<ImageProps>`
  position: absolute !important;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: ${({ opaque }) => (opaque ? `0.2` : `1`)};
`;
