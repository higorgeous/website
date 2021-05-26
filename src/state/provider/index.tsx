import React from 'react';
import { PageProps } from 'gatsby';
import { Provider as ReduxProvider } from 'react-redux';

import Layout from '@/layout';

import { store } from '..';

const Provider: React.FC<PageProps> = ({ element, props }: any) => (
  <ReduxProvider store={store}>
    <Layout {...props}>{element}</Layout>
  </ReduxProvider>
);

export default Provider;
