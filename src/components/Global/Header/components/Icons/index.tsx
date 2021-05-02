import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { UniSwap } from '@/components/Library/Icons';

import { Wrapper } from './styles';

const Icons: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulGlobalInformation(
          id: { eq: "e42f42c3-d5d5-57f7-95bb-0eb8ef56a767" }
        ) {
          uniswap
        }
      }
    `,
  );
  return (
    <Wrapper>
      <a
        href={data.contentfulGlobalInformation.uniswap}
        target="_blank"
        rel="noopener noreferrer"
      >
        <UniSwap />
      </a>
    </Wrapper>
  );
};

export default Icons;
