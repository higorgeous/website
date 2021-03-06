import React, { useEffect, useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Helmet } from 'react-helmet';

import MenuToggle from './components/MenuToggle';
import Top from './components/Top';
import Navigation from './components/Navigation';

import { Wrapper } from './styles';

const background = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: `spring`,
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.1,
      type: `spring`,
      stiffness: 300,
      damping: 40,
    },
  },
};

type Props = {
  darkRanges: any;
  windowSize: any;
  scrollPosition: any;
};

const Menu: React.FC<Props> = ({ darkRanges, windowSize, scrollPosition }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const menuRef = useRef(null);

  const adjustment = windowSize.width > 768 ? 61 : 45;

  const isDark = darkRanges.some(
    (x: { start: number; finish: number }) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
  );

  const [colorDark, setColorDark] = useState(isDark);

  useEffect(() => {
    setColorDark(isDark);
  }, [darkRanges, scrollPosition]);

  return (
    <Wrapper>
      {isOpen && (
        <Helmet
          bodyAttributes={{
            class: `menu`,
          }}
        />
      )}
      <motion.nav
        initial={false}
        animate={isOpen ? `open` : `closed`}
        ref={menuRef}
      >
        <motion.div className="background" variants={background}>
          <Top />
        </motion.div>
        <Navigation />
        <MenuToggle
          colorDark={colorDark}
          isOpen={isOpen}
          toggle={() => toggleOpen()}
        />
      </motion.nav>
    </Wrapper>
  );
};

export default Menu;
