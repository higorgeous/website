import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import { Image } from './styles';

const BackgroundImage: React.FC<any> = ({ images, backgroundColor }) => {
  const bgImage = getImage(images[0]);
  const backgroundImage = convertToBgImage(bgImage);
  return (
    <Image
      Tag="div"
      {...backgroundImage}
      backgroundColor={backgroundColor}
      preserveStackingContext
    />
  );
};

export default BackgroundImage;
