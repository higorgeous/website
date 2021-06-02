import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { handleExternalClick } from '@/utils';
import { Wrapper, Character } from './styles';

const MapCharComponent = ({ character, scrollPosition, darkRanges, index }) => {
  const [adjustment, setAdjustment] = useState(0);

  useEffect(() => {
    const characterRef = document
      .getElementById(`lftbtm-${index}`)
      .getBoundingClientRect();
    setAdjustment(characterRef.bottom);
  }, []);

  const isDark = darkRanges.some(
    (x: { start: number; finish: number }) =>
      scrollPosition > x.start - adjustment &&
      scrollPosition < x.finish - adjustment,
  );

  return (
    <Character id={`lftbtm-${index}`} isDark={isDark}>
      {character}
    </Character>
  );
};

const Left: React.FC<any> = ({ scrollPosition, darkRanges }) => {
  const data = useStaticQuery(
    graphql`
      query {
        pancakeswap: contentfulInfoLinks(
          id: { eq: "2d1a0537-de2a-5a3a-befe-7bda5d489ace" }
        ) {
          id
          uri
          text
        }
      }
    `,
  );

  const { uri, text } = data.pancakeswap;
  const characters = Array.from(`Get on Pancakeswap`);

  return (
    <Wrapper>
      <ul>
        <li>
          <a
            className="no-style"
            href={uri}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleExternalClick({ uri, name: text })}
          >
            {characters.map((character, index) => (
              <MapCharComponent
                key={index}
                character={character}
                scrollPosition={scrollPosition}
                darkRanges={darkRanges}
                index={index}
              />
            ))}
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Left;
