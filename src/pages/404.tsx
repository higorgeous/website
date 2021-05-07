import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Page from '@/components/Library/Page';

const NotFound: React.FC<PageProps> = ({ data }) => <Page data={data} />;

export const query = graphql`
  query {
    theme: contentfulComposePage(slug: { eq: "/404" }) {
      leftColor
      rightColor
    }
    seo: contentfulComposePage(slug: { eq: "/404" }) {
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

export default NotFound;
