import React from 'react';

import { Content } from './styles';

const Box5: React.FC<any> = ({ text, colorDark }) => (
  <Content
    colorDark={colorDark}
    dangerouslySetInnerHTML={{
      __html: text.childMarkdownRemark.html,
    }}
  />
);

export default Box5;
