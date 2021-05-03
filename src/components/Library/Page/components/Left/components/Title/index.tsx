import React from 'react';

import { Wrapper, Heading, Text, Top } from './styles';

type Props = {
  seo: any;
};

const Title: React.FC<Props> = ({ seo }: Props) => {
  const { title, description } = seo;
  return (
    <Wrapper>
      <Top>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Top>
    </Wrapper>
  );
};

export default Title;
