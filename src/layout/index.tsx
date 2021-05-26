import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { Theme, GlobalTheme } from '@/styles';

import { LayoutProps } from './types';

const Layout: React.FC = ({ children }: LayoutProps) => {
  // TODO Delete in production
  const reduxState = useSelector((state: any) => state);
  console.log(reduxState);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
