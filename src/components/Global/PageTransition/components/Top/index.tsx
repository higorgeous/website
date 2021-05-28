import React, { useState } from 'react';

import { LogoDesktop, LogoMobile, LogoTablet } from '@/components/Library/Logo';

import { Wrapper, Container } from './styles';

const Top: React.FC<any> = ({ windowSize }) => {
  const [animating, setAnimating] = useState(false);

  return (
    <Wrapper
      className={animating && `animating`}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      exit={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: `easeInOut` }}
      onAnimationStart={() => setAnimating(true)}
      onAnimationEnd={() => setAnimating(false)}
    >
      <Container>
        {windowSize.width > 960 && <LogoDesktop />}
        {windowSize.width < 960 && windowSize.width > 768 && <LogoTablet />}
        {windowSize.width < 768 && <LogoMobile />}
      </Container>
    </Wrapper>
  );
};

export default Top;
