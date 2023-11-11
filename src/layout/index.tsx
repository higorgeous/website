import React from 'react';
import { PageProps } from 'gatsby';
import { ThemeProvider } from '@emotion/react';

import { Theme, GlobalTheme } from '@/styles';

const Layout: React.FC<PageProps> = ({ element }: any) => (
  <ThemeProvider theme={Theme}>
    <GlobalTheme />
    {element}
  </ThemeProvider>
);

export default Layout;
