import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, NavLink } from './styles';

const SecondaryNavigation: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulInfoGlobalInformation(siteTitle: { eq: "Gorgeous" }) {
          secondaryNavigation {
            id
            title
            slug
          }
        }
      }
    `,
  );
  return (
    <Wrapper>
      {data.contentfulInfoGlobalInformation.secondaryNavigation.map(
        (nav: { id: string; slug: string; title: string }) => (
          <NavLink key={nav.id} to={nav.slug}>
            {nav.title}
          </NavLink>
        ),
      )}
    </Wrapper>
  );
};

export default SecondaryNavigation;
