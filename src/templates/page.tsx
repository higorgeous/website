import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Page from '@/components/Library/Page';

const PageTemplate: React.FC<PageProps> = ({ data }) => <Page {...data} />;

export const query = graphql`
  query pageQuery($slug: String!) {
    queries: contentfulPageWebsite(slug: { eq: $slug }) {
      title
      slug
      seo {
        pageTitle
        description {
          description
        }
        noindex
        nofollow
        image {
          file {
            url
          }
        }
      }
      theme {
        leftColor
        rightColor
        backgroundImage {
          title
          gatsbyImageData
        }
      }
      contentTitle
      sections {
        id
        title
        richtext {
          raw
        }
      }
    }
  }
`;

export default PageTemplate;
