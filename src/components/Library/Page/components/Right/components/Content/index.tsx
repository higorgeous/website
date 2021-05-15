import React from 'react';

import { Wrapper } from './styles';
import Richtext from './components/RichText';

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
        {section.json && <p>{section.json}</p>}
      </>
    ))}
  </Wrapper>
);

export default Content;
