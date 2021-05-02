import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { isBrowser } from '@/utils';
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
          facebook
          twitter
          telegram
        }
      }
    `,
  );

  const uniSwapLink = () => {
    if (isBrowser) {
      window.open(data.contentfulGlobalInformation.uniswap, `_blank`);
    }
  };

  const contractLink = () => {
    if (isBrowser) {
      window.open(data.contentfulGlobalInformation.contractLink, `_blank`);
    }
  };

  return (
    <Wrapper>
      <Button isFullWidth click={() => uniSwapLink()}>
        Get Gorgeous
      </Button>
      <Button isFullWidth isFilled click={() => contractLink()}>
        View contract
      </Button>
    </Wrapper>
  );
};

export default Footer;
