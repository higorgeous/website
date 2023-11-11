import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import { Image } from './styles';

const BackgroundImage: React.FC<any> = ({ image, backgroundColor, opaque }) => {
  const bgImage = getImage(image);
  const backgroundImage = convertToBgImage(bgImage);

  return (
    <Image
      Tag="div"
      {...backgroundImage}
      backgroundColor={backgroundColor}
      preserveStackingContext
      opaque={opaque}
    />
  );
};

export default BackgroundImage;
