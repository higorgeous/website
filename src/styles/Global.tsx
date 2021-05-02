import React from 'react';
import { Global } from '@emotion/react';

import normalize from './Normalize';
import baseStyles from './Base';
import typographyStyles from './Typography';
import customStyles from './Custom';

const GlobalStyles: React.FC = () => (
  <>
    <Global styles={normalize} />
    <Global styles={baseStyles} />
    <Global styles={typographyStyles} />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
