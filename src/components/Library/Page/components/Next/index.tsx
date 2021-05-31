import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import { Wrapper, NextTitle, NextLink } from './styles';

type Props = {
  slug: string;
  seo: any;
};

const Next: React.FC<Props> = (next) => {
  const { slug, seo } = next;
  const { pageTitle } = seo;

  const data = useStaticQuery(
    graphql`
      query {
        navPages: contentfulInfoGlobalInformation(
          id: { eq: "62f30e7f-d2df-5fba-9384-d2656abd46b8" }
        ) {
          primaryNavigation {
            slug
          }
        }
      }
    `,
  );

  const navPages = data.navPages.primaryNavigation;
  const getIndex = navPages.findIndex((nav) => nav.slug === slug);

  const index = getIndex >= 0 ? getIndex + 1 : 0;
  return (
    <Wrapper data-background="dark">
      <NextTitle>Keep reading</NextTitle>
      <NextLink>
        <Link
          to={slug}
          data-fill={pageTitle}
          data-section={index === 0 ? `` : `0${index}`}
        >
          {pageTitle}
        </Link>
      </NextLink>
    </Wrapper>
  );
};
export default Next;
