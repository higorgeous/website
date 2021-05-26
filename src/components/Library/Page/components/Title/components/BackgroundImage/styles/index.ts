import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

export const Image = styled(BackgroundImage)`
  position: absolute !important;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  transform: translateY(0);
`;
