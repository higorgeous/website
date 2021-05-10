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
        contentfulInfoGlobalInformation(siteTitle: { eq: "Gorgeous" }) {
          primaryNavigation {
            id
            title
            slug
          }
        }
      }
    `,
  );
  return (
    <Wrapper theme={theme}>
      {data.contentfulInfoGlobalInformation.primaryNavigation.map(
        (nav: { id: string; slug: string; title: string }) => (
          <Link key={nav.id} to={nav.slug}>
            {nav.title}
          </Link>
        ),
      )}
    </Wrapper>
  );
};

export default Navigation;
