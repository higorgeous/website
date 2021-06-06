import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

import PrimaryItem from './components/PrimaryItem';
import SecondaryItem from './components/SecondaryItem';

import { Wrapper } from './styles';
import SocialItems from './components/Social';

const nav = {
  open: {
    opacity: 1,
    display: `flex`,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    display: `none`,
    transition: {
      when: `afterChildren`,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const primary = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const secondary = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const social = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const title = {
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

const Navigation: React.FC<any> = () => {
  const data = useStaticQuery(
    graphql`
      query {
        primaryLinks: contentfulInfoGlobalInformation(
          id: { eq: "62f30e7f-d2df-5fba-9384-d2656abd46b8" }
        ) {
          id
          primaryNavigation {
            id
            title
            slug
          }
        }
        secondaryLinks: contentfulInfoGlobalInformation(
          id: { eq: "62f30e7f-d2df-5fba-9384-d2656abd46b8" }
        ) {
          id
          secondaryNavigation {
            id
            text
            uri
          }
        }
        socialLinks: allContentfulInfoLinks(
          filter: { type: { eq: "Social" } }
        ) {
          edges {
            node {
              id
              text
              uri
              icon {
                icon
              }
            }
          }
        }
      }
    `,
  );
  return (
    <Wrapper variants={nav}>
      <motion.ul variants={primary}>
        <motion.li variants={title}>Menu</motion.li>
        {data.primaryLinks.primaryNavigation.map((link, index) => (
          <PrimaryItem key={link.id} link={link} index={index} />
        ))}
      </motion.ul>
      <motion.ul variants={secondary}>
        <motion.li variants={title}>Useful links</motion.li>
        {data.secondaryLinks.secondaryNavigation.map((link) => (
          <SecondaryItem key={link.id} link={link} />
        ))}
      </motion.ul>
      <motion.ul variants={social} className="social">
        <motion.li variants={title}>Follow us</motion.li>
        {data.socialLinks.edges.map(({ node: icon }) => (
          <SocialItems key={icon.id} icon={icon} />
        ))}
      </motion.ul>
    </Wrapper>
  );
};

export default Navigation;
