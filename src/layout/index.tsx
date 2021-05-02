import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { Theme, GlobalTheme } from '@/styles';
import '@/fonts/index.css';

import Header from '@/components/Global/Header';
import Menu from '@/components/Global/Menu';

import { LayoutProps } from './types';

const Layout: React.FC = ({ children }: LayoutProps) => {
  // TODO Delete in production
  const reduxState = useSelector((state: any) => state);
  console.log(reduxState);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Header />
      <Menu />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
