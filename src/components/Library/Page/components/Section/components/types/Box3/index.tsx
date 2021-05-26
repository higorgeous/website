import React from 'react';

import { Title, Item } from './styles';

const Box3: React.FC<any> = ({ text, images, setActiveImage, colorDark }) => (
  <>
    <Title
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}
    />
    {images.map((image: { id: string; title: string }) => (
      <Item
        key={image.id}
        data-fill={image.title}
        onMouseOver={() => setActiveImage(image.id)}
        onMouseOut={() => setActiveImage(null)}
        colorDark={colorDark}
      >
        {image.title}
      </Item>
    ))}
  </>
);

export default Box3;
