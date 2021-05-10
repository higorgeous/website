import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Wrapper } from './styles';

type Props = {
  backgroundImage: any;
};

const BackgroundImage: React.FC<Props> = ({ backgroundImage }: Props) => {
  const image = getImage(backgroundImage);
  return (
    <Wrapper>
      <GatsbyImage image={image} alt={backgroundImage.title} />
    </Wrapper>
  );
};

export default BackgroundImage;
