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
        image {
          file {
            url
          }
        }
      }
      hero {
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
        slug
        seo {
          pageTitle
        }
      }
    }
  }
`;

export default NotFound;
