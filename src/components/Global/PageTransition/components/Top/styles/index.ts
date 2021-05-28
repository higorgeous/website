import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { Theme } from '@/styles';

export const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 24px;
  left: 28px;
  clip-path: polygon(100% 100%, 100% 0%, 0% 0%, 0% 100%);
  transition: 0.5s ease-in-out;
  pointer-events: none;
  z-index: 9999;
  @media (min-width: ${Theme.responsive.medium}) {
    top: 48px;
    left: 56px;
  }
  &.animating {
    clip-path: polygon(100% 100%, 100% 0%, 100% 0%, 100% 100%);
  }
`;

export const Container = styled.div`
  max-width: 140px;
  top: 0;
  left: 0;
  color: ${Theme.palette.light};
  @media (min-width: ${Theme.responsive.medium}) {
    max-width: 350px;
  }
  @media (min-width: ${Theme.responsive.large}) {
    max-width: 400px;
  }

  svg {
    max-width: 100%;
    height: auto;
    border: 0;
    fill: ${Theme.palette.light};
  }
`;
