import * as React from 'react';
import { motion } from 'framer-motion';
import { isBrowser } from '@/utils';

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

const SecondaryItem: React.FC<any> = ({ link }) => {
  const handleClick = () => {
    if (isBrowser)
      (window as any).analytics.track(`External page clicked`, {
        uri: link.uri,
        Name: link.text,
      });
  };
  return (
    <motion.li variants={variants}>
      <a
        href={link.uri}
        target="_blank"
        rel="noreferrer"
        onClick={() => handleClick()}
      >
        <motion.span className="primary">{link.text}</motion.span>
      </a>
    </motion.li>
  );
};

export default SecondaryItem;
