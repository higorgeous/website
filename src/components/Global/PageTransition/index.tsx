/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { SlideIn, SlideOut } from './styles';

const PageTransition: React.FC = () => (
  <>
    <SlideIn
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 0.75, ease: `easeInOut` }}
    />
    <SlideOut
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.75, ease: `easeInOut` }}
    />
  </>
);

export default PageTransition;
