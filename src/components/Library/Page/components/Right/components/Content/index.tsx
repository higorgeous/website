import React from 'react';

import { Wrapper } from './styles';
import Richtext from './components/Richtext';
import ThreeBoxes from './components/ThreeBoxes';

type Props = {
  sections: any;
  color: string;
};

const Content: React.FC<Props> = ({ sections, color }: Props) => (
  <Wrapper>
    {sections.map((section: any) => (
      <>
        {section.richtext && (
          <Richtext key={section.id} color={color} section={section} />
        )}
        {section.json && section.json.type === `threeBox` && (
          <ThreeBoxes key={section.id} section={section} />
        )}
      </>
    ))}
  </Wrapper>
);

export default Content;
