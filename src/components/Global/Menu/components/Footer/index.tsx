import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Button from '@/components/Library/Button';

import { Wrapper } from './styles';

const Footer: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        etherscan: contentfulInfoLinks(title: { eq: "Etherscan" }) {
          text
          uri
        }
        uniswap: contentfulInfoLinks(title: { eq: "Uniswap" }) {
          text
          uri
        }
      }
    `,
  );

  return (
    <Wrapper>
      <Button type="anchor" isFullWidth href={data.uniswap.uri}>
        {data.uniswap.text}
      </Button>
      <Button type="anchor" isFullWidth isFilled href={data.etherscan.uri}>
        {data.etherscan.text}
      </Button>
    </Wrapper>
  );
};

export default Footer;
