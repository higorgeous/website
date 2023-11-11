import React from 'react';
import { graphql, PageProps } from 'gatsby';

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
      hero {
        id
        title
        backgroundColor
        images {
          id
          title
          file {
            url
            contentType
          }
          gatsbyImageData(layout: FULL_WIDTH, quality: 80)
        }
      }
      sections {
        id
        title
        type
        backgroundColor
        width
        richtext {
          raw
          references {
            ... on ContentfulInfoLinks {
              contentful_id
              __typename
              text
              uri
            }
          }
        }
        image {
          title
          file {
            url
            contentType
          }
          gatsbyImageData(layout: FULL_WIDTH, quality: 80)
        }
        images {
          id
          title
          description
          gatsbyImageData(layout: FULL_WIDTH, quality: 80)
        }
      }
      next {
        id
        title
        slug
      }
    }
  }
`;

export default PageTemplate;
