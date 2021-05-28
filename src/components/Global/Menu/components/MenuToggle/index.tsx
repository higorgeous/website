import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper } from './styles';

type Props = {
  colorDark: boolean;
  isOpen: boolean;
  toggle: any;
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<Props> = ({ colorDark, isOpen, toggle }: Props) => (
  <Wrapper id="trigger" onClick={toggle} colorDark={colorDark} isOpen={isOpen}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: `M 2 2.5 L 20 2.5` },
          open: { d: `M 3 16.5 L 17 2.5` },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: `M 2 16.346 L 20 16.346` },
          open: { d: `M 3 2.5 L 17 16.346` },
        }}
      />
    </svg>
  </Wrapper>
);

export default MenuToggle;
