import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Button from '@/components/Library/Button';

import {
  Wrapper,
  Section,
  Title,
  Body,
  QuoteHeading,
  Blockquote,
} from './styles';

type Props = {
  sections: any;
  color: string;
};

const Bold = ({ children }) => <strong>{children}</strong>;
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.HEADING_4]: (_node: any, children: any) => (
      <QuoteHeading>
        <h4>{children}</h4>
      </QuoteHeading>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: any) => (
      <Blockquote>{children}</Blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: ({ data }: any) => (
      <GatsbyImage image={getImage(data.target)} alt={data.target.title} />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: ({ data }: any) => (
      <Button inline type="link" href={data.target.slug}>
        {data.target.title}
      </Button>
    ),
    [INLINES.HYPERLINK]: ({ data }: any, children: any) => (
      <Button inline type="anchor" href={data.uri}>
        {children}
      </Button>
    ),
  },
};

const Content: React.FC<Props> = ({ sections, color }: Props) => (
  <Wrapper>
    {sections.map((section: any) => {
      const { title, richtext } = section;

      return (
        <Section key={section.id}>
          <Title color={color}>{title}</Title>
          <Body>{richtext && renderRichText(richtext, options)}</Body>
        </Section>
      );
    })}
  </Wrapper>
);

export default Content;
