/* eslint-disable react/jsx-filename-extension */

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Layout from './src/layout';

export const wrapRootElement = Layout;

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const TRANSITION_DELAY = 0.3 * 1000 * 2;

  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];

    window.setTimeout(
      () => window.scrollTo(...savedPosition),
      TRANSITION_DELAY,
    );
  }
  return false;
};
