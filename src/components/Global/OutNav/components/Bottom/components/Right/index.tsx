import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { handleExternalClick } from '@/utils';
import { Wrapper, Icon, Share, ShareChar } from './styles';

const MapIconComponent = ({ icon, scrollPosition, darkRanges }) => {
  const [adjustment, setAdjustment] = useState(0);

  useEffect(() => {
    const characterRef = document
      .getElementById(`iconBtm-${icon.id}`)
      .getBoundingClientRect();
    setAdjustment(characterRef.bottom);
  }, []);

  const isDark = darkRanges.some(
    (x: { start: number; finish: number }) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
  );

  return (
    <Icon id={`iconBtm-${icon.id}`} isDark={isDark}>
      <a
        className="no-style"
        href={icon.uri}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          handleExternalClick({
            uri: icon.uri,
            name: icon.text,
          })
        }
      >
        <img src={icon.icon.icon} alt={icon.text} />
      </a>
    </Icon>
  );
};

const MapCharComponent = ({ character, scrollPosition, darkRanges, index }) => {
  const [adjustment, setAdjustment] = useState(0);

  useEffect(() => {
    const characterRef = document
      .getElementById(`rgtbtm-${index}`)
      .getBoundingClientRect();
    setAdjustment(characterRef.bottom);
  }, []);

  const isDark = darkRanges.some(
    (x: { start: number; finish: number }) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
  );

  return (
    <ShareChar id={`rgtbtm-${index}`} isDark={isDark}>
      {character}
    </ShareChar>
  );
};

const Right: React.FC<any> = ({ scrollPosition, darkRanges }) => {
  const data = useStaticQuery(
    graphql`
      query {
        socialLinks: allContentfulInfoLinks(
          filter: { type: { eq: "Social" } }
        ) {
          edges {
            node {
              id
              text
              uri
              icon {
                icon
              }
            }
          }
        }
      }
    `,
  );
  const characters = Array.from(`–––––––––– follow us`);
  return (
    <Wrapper>
      <ul>
        {data.socialLinks.edges.map(({ node }) => (
          <MapIconComponent
            key={node.id}
            icon={node}
            scrollPosition={scrollPosition}
            darkRanges={darkRanges}
          />
        ))}
        <Share>
          {characters.map((character, index) => (
            <MapCharComponent
              key={index}
              character={character}
              scrollPosition={scrollPosition}
              darkRanges={darkRanges}
              index={index}
            />
          ))}
        </Share>
      </ul>
    </Wrapper>
  );
};

export default Right;
