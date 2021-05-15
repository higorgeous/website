import React from 'react';

import { Title, Section, Boxes, Box } from './styles';

type Props = {
  section: any;
};

const ThreeBoxes: React.FC<Props> = ({ section }: Props) => {
  const { title, json } = section;
  return (
    <Section>
      <Title>
        <h4>{title}</h4>
      </Title>
      <Boxes>
        {json.content.map((i: { title: string; text: string }) => (
          <Box>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default ThreeBoxes;
