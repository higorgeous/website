import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { Wrapper } from './styles';

type Props = {
  theme: {
    leftDark: boolean;
  };
};

const Navigation: React.FC<Props> = ({ theme }: Props) => {
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
    <Wrapper theme={theme}>
      {data.contentfulGlobalInformation.navigation.map(
        (nav: { id: string; slug: string; name: string }) => (
          <Link key={nav.id} to={nav.slug}>
            {nav.name}
          </Link>
        ),
      )}
    </Wrapper>
  );
};

export default Navigation;
