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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      sections {
        id
        title
        type
        backgroundColor
        text {
          childMarkdownRemark {
            html
          }
        }
        images {
          id
          title
          file {
            url
            contentType
          }
          gatsbyImageData(layout: FULL_WIDTH)
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
