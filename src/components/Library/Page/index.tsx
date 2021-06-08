import React, { useRef } from 'react';

import {
  getDarkRanges,
  useWindowSize,
  useScrollPosition,
  getFaqRanges,
} from '@/utils';

import PageTransitions from '@/components/Global/PageTransition';
import Cursor from '@/components/Global/Cursor';
import SEO from '@/components/Global/Seo';
import OuterNav from '@/components/Global/OutNav';
import Menu from '@/components/Global/Menu';

import Title from './components/Title';
import Section from './components/Section';
import Next from './components/Next';

import Questions from './components/Questions';

import { Wrapper } from './styles';

const Page: React.FC<any> = ({ queries }) => {
  const titleRef = useRef(null);
  const faqRef = useRef(null);

  const { slug, seo, hero, sections = [], next = null } = queries;

  let darkRanges = getDarkRanges(sections, titleRef);
  if (slug === `/frequently-asked-questions`) {
    darkRanges = getFaqRanges(titleRef, faqRef);
  }

  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();
  return (
    <Wrapper>
      {windowSize.width > 960 && <Cursor />}
      <PageTransitions />
      <SEO slug={slug} {...seo} />
      <OuterNav
        darkRanges={darkRanges}
        windowSize={windowSize}
        scrollPosition={scrollPosition}
      />
      <Menu
        darkRanges={darkRanges}
        windowSize={windowSize}
        scrollPosition={scrollPosition}
      />
      <Title {...hero} slug={slug} innerRef={titleRef} />
      {slug !== `/frequently-asked-questions` &&
        sections &&
        sections.map((section: any) => (
          <Section key={section.id} {...section} windowSize={windowSize} />
        ))}
      {slug === `/frequently-asked-questions` && (
        <Questions innerRef={faqRef} />
      )}
      {next && <Next {...next} />}
    </Wrapper>
  );
};

export default Page;
