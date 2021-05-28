import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { Theme } from '@/styles';

export const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${Theme.palette.navigation};
  filter: brightness(0.9);
  transform-origin: left;
  z-index: 9999;
`;

export const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${Theme.palette.navigation};
  filter: brightness(0.9);
  transform-origin: right;
  z-index: 9999;
`;
