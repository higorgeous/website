import React from 'react';

import { Content } from './styles';

const Box2: React.FC<any> = ({ text }) => (
  <Content
    dangerouslySetInnerHTML={{
      __html: text.childMarkdownRemark.html,
    }}
  />
);

export default Box2;
