import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '@/components/Library/Link';
import { Wrapper, Top, Bottom, Heading, Text } from './styles';

type Props = {
  seo: any;
};

const Content: React.FC<Props> = ({ seo }: Props) => {
  const { menuTitle, description } = seo.frontmatter;
  const titleMap = menuTitle.split(``);

  const data = useStaticQuery(
    graphql`
      query {
        contentfulGlobalInformation(
          id: { eq: "e42f42c3-d5d5-57f7-95bb-0eb8ef56a767" }
        ) {
          secondaryNavigation {
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
      <Top>
        <Heading>
          {titleMap.map((i: string) => {
            const char = i.toLowerCase();
            const altArray = [`o`, `d`, `g`, `c`];
            const alt = altArray.includes(char) ? `alt` : undefined;
            return (
              <span className={alt} key={char}>
                {char}
              </span>
            );
          })}
        </Heading>
        <Text>{description}</Text>
      </Top>
      <Bottom>
        {data.contentfulGlobalInformation.secondaryNavigation.map(
          (nav: { id: string; slug: string; name: string }) => (
            <Link key={nav.id} to={nav.slug}>
              <span>{nav.name}</span>
            </Link>
          ),
        )}
      </Bottom>
    </Wrapper>
  );
};

export default Content;
