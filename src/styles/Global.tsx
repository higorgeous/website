import React from 'react';
import { Global } from '@emotion/react';

import baseStyles from './Base';
import typographyStyles from './Typography';

const GlobalStyles: React.FC = () => (
  <>
    <Global styles={baseStyles} />
    <Global styles={typographyStyles} />
  </>
);

export default GlobalStyles;
