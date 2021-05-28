import React, { useRef } from 'react';

import OuterNav from '@/components/Global/OutNav';
import Menu from '@/components/Global/Menu';
import PageTransitions from '@/components/Global/PageTransition';

import Title from './components/Title';
import Section from './components/Section';
import Next from './components/Next';

import { Wrapper } from './styles';

const Page: React.FC<any> = ({ queries }) => {
  const titleRef = useRef(null);
  const { hero, sections = [], next = null } = queries;
  return (
    <Wrapper>
      <PageTransitions />
      <OuterNav titleRef={titleRef} sections={sections} />
      <Menu titleRef={titleRef} sections={sections} />
      <Title {...hero} innerRef={titleRef} />
      {sections &&
        sections.map((section: any) => (
          <Section key={section.id} {...section} />
        ))}
      {next && <Next {...next} />}
    </Wrapper>
  );
};

export default Page;
