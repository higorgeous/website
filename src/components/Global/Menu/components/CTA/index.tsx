import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Button from '@/components/Library/Button';

import { UniSwap } from '@/components/Library/Icons';
import { Wrapper } from './styles';

const CTA: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulGlobalInformation(
          id: { eq: "e42f42c3-d5d5-57f7-95bb-0eb8ef56a767" }
        ) {
          id
        }
      }
    `,
  );
  console.log(data);

  return (
    <Wrapper>
      <Button isFullWidth>Buy on Uniswap</Button>
      <Button isFullWidth isFilled>
        Buy
      </Button>
    </Wrapper>
  );
};

export default CTA;
