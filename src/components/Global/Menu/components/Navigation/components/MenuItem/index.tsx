import * as React from 'react';

import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem: React.FC<any> = ({ link }) => (
  <motion.li variants={variants}>
    <Link to={link.slug}>{link.hero.title}</Link>
  </motion.li>
);
