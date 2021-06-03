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
          fluid(maxWidth: 2000) {
            ...GatsbyContentfulFluid_withWebp
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
            ... on ContentfulAsset {
              contentful_id
              __typename
              title
              gatsbyImageData(layout: FULL_WIDTH)
            }
            ... on ContentfulPageWebsite {
              contentful_id
              __typename
              title
              slug
            }
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
        video {
          id
          file {
            url
            contentType
          }
        }
      }
      next {
        id
        slug
        seo {
          pageTitle
        }
      }
    }
  }
`;

export default PageTemplate;
