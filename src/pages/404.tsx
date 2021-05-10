import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Page from '@/components/Library/Page';

const NotFound: React.FC<PageProps> = ({ data }) => <Page {...data} />;

export const query = graphql`
  query {
    queries: contentfulPageWebsite(slug: { eq: "/404" }) {
      title
      slug
      seo {
        pageTitle
        description {
          description
        }
        noindex
        nofollow
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
        title
        richtext {
          raw
        }
      }
    }
  }
`;

export default NotFound;
