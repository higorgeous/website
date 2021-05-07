import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Wrapper, Section, Title, Body } from './styles';

type Props = {
  sections: any;
};

const Bold = ({ children }) => <strong>{children}</strong>;
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { data } = node;
      return (
        <GatsbyImage image={getImage(data.target)} alt={data.target.title} />
      );
    },
  },
};

const Content: React.FC<Props> = ({ sections }: Props) => (
  <Wrapper>
    {sections.map((section: any) => {
      const { title, body } = section;

      return (
        <Section key={section.id}>
          <Title>{title}</Title>
          <Body>{body && renderRichText(body, options)}</Body>
        </Section>
      );
    })}
  </Wrapper>
);

export default Content;
