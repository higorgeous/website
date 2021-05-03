import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Button from '@/components/Library/Button';

import { Wrapper } from './styles';

const Footer: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulGlobalInformation(
          id: { eq: "e42f42c3-d5d5-57f7-95bb-0eb8ef56a767" }
        ) {
          uniswap
          contractLink
        }
      }
    `,
  );

  return (
    <Wrapper>
      <Button
        type="anchor"
        isFullWidth
        href={data.contentfulGlobalInformation.uniswap}
      >
        Get Gorgeous
      </Button>
      <Button
        type="anchor"
        isFullWidth
        isFilled
        href={data.contentfulGlobalInformation.contractLink}
      >
        View contract
      </Button>
    </Wrapper>
  );
};

export default Footer;
