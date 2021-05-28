/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useWindowSize } from '@/utils';
import React from 'react';

import Top from './components/Top';

import { SlideIn, SlideOut } from './styles';

const PageTransition: React.FC = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <SlideIn
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: `easeInOut` }}
      />
      <SlideOut
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: `easeInOut` }}
      />
      <Top windowSize={windowSize} />
    </>
  );
};

export default PageTransition;
