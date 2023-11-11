import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';

import { Image } from './styles';

const BackgroundImagesHover: React.FC<any> = ({
  images,
  backgroundColor,
  activeImage,
}) => (
  <>
    {images.map((image: any) => {
      const bgImage = getImage(image);
      const backgroundImage = convertToBgImage(bgImage);
      const isActive = activeImage === image.id;
      return (
        <Image key={image.id} isActive={isActive}>
          <BackgroundImage
            Tag="div"
            {...backgroundImage}
            backgroundColor={backgroundColor}
            preserveStackingContext
          />
        </Image>
      );
    })}
  </>
);

export default BackgroundImagesHover;
