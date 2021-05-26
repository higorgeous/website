import React from 'react';

import { Content } from './styles';

const Box1: React.FC<any> = ({ text }) => (
  <Content
    dangerouslySetInnerHTML={{
      __html: text.childMarkdownRemark.html,
    }}
  />
);

export default Box1;
