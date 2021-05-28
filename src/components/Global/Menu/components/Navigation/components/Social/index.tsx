import { motion } from 'framer-motion';
import React from 'react';

import { Icon } from './styles';

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SocialItems: React.FC<any> = ({ icon }) => (
  <motion.li variants={variants}>
    <Icon>
      <a href={icon.uri} target="_blank" rel="noreferrer">
        <img src={icon.icon.icon} alt={icon.text} />
      </a>
    </Icon>
  </motion.li>
);

export default SocialItems;
