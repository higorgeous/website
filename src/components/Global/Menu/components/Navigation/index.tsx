import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, NavLink } from './styles';

const Navigation: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulGlobalInformation(
          id: { eq: "e42f42c3-d5d5-57f7-95bb-0eb8ef56a767" }
        ) {
          navigation {
            id
            name
            slug
          }
        }
      }
    `,
  );
  return (
    <Wrapper>
      {data.contentfulGlobalInformation.navigation.map(
        (nav: { id: string; slug: string; name: string }) => (
          <NavLink key={nav.id} to={nav.slug}>
            {nav.name}
          </NavLink>
        ),
      )}
    </Wrapper>
  );
};

export default Navigation;
