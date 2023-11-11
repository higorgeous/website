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
          fluid(maxWidth: 2000) {
            ...GatsbyContentfulFluid_withWebp
          }
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
      next {
        id
        title
        slug
      }
    }
  }
`;

export default NotFound;
