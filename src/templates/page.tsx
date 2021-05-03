import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Page from '@/components/Library/Page';

const PageTemplate: React.FC<PageProps> = ({ data }) => <Page data={data} />;

export const query = graphql`
  query pageQuery($slug: String!) {
    theme: contentfulComposePage(slug: { eq: $slug }) {
      leftColor
      rightColor
    }
    seo: contentfulComposePage(slug: { eq: $slug }) {
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

export default PageTemplate;
