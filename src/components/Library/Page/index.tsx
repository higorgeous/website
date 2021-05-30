import React, { useRef } from 'react';

import PageTransitions from '@/components/Global/PageTransition';
import Cursor from '@/components/Global/Cursor';
import SEO from '@/components/Global/Seo';
import OuterNav from '@/components/Global/OutNav';
import Menu from '@/components/Global/Menu';
import SmoothScroll from '@/components/Global/Scroll';

import Title from './components/Title';
import Section from './components/Section';
import Next from './components/Next';

import { Wrapper } from './styles';

const Page: React.FC<any> = ({ queries }) => {
  const titleRef = useRef(null);
  const { slug, seo, hero, sections = [], next = null } = queries;
  return (
    <Wrapper>
      <PageTransitions />
      <Cursor />
      <SEO slug={slug} {...seo} />
      <OuterNav titleRef={titleRef} sections={sections} />
      <Menu titleRef={titleRef} sections={sections} />
      {/* <SmoothScroll> */}
      <Title {...hero} innerRef={titleRef} />
      {sections &&
        sections.map((section: any) => (
          <Section key={section.id} {...section} />
        ))}
      {next && <Next {...next} />}
      {/* </SmoothScroll> */}
    </Wrapper>
  );
};

export default Page;
