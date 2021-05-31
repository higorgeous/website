import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

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

const PrimaryItem: React.FC<any> = ({ link, index }) => (
  <motion.li variants={variants}>
    <Link to={link.slug} activeClassName="active">
      <motion.span className="primary" data-section={`0${index + 1}`}>
        {link.seo.pageTitle}
      </motion.span>
    </Link>
  </motion.li>
);

export default PrimaryItem;
