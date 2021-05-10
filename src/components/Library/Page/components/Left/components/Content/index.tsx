import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '@/components/Library/Link';
import { Wrapper, Top, Bottom, Heading, Text } from './styles';

type Props = {
  title: string;
  seo: any;
};

const Content: React.FC<Props> = ({ title, seo }: Props) => {
  const { description } = seo;
  const titleMap = title.split(``);

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
        <Text>{description.description}</Text>
      </Top>
      <Bottom>
        {data.contentfulInfoGlobalInformation.secondaryNavigation.map(
          (nav: { id: string; slug: string; title: string }) => (
            <Link key={nav.id} to={nav.slug}>
              <span>{nav.title}</span>
            </Link>
          ),
        )}
      </Bottom>
    </Wrapper>
  );
};

export default Content;
