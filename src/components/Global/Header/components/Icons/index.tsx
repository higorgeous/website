import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { UniSwap } from '@/components/Library/Icons';

import { Wrapper } from './styles';

type Props = {
  theme: {
    rightDark: boolean;
  };
};

const Icons: React.FC<Props> = ({ theme }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        uniswap: contentfulInfoLinks(title: { eq: "Uniswap" }) {
          uri
        }
      }
    `,
  );
  return (
    <Wrapper theme={theme}>
      <a href={data.uniswap.uri} target="_blank" rel="noopener noreferrer">
        <UniSwap />
      </a>
    </Wrapper>
  );
};

export default Icons;
