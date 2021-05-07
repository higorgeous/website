import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Page from '@/components/Library/Page';

const Home: React.FC<PageProps> = ({ data }) => <Page data={data} />;

export const query = graphql`
  query {
    theme: contentfulComposePage(slug: { eq: "/" }) {
      leftColor
      rightColor
    }
    seo: contentfulComposePage(slug: { eq: "/" }) {
      slug
      seo {
        title
        description
        keywords
        no_index
        no_follow
      }
    }
  }
`;

export default Home;