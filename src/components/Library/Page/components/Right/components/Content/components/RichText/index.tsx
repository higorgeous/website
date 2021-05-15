import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

import Button from '@/components/Library/Button';

import { Title, Body, QuoteHeading, Blockquote, Section } from './styles';

type Props = {
  section: any;
  color: string;
};

const options: any = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
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
    [INLINES.EMBEDDED_ENTRY]: ({ data }: any) => (
      <span style={{ fontSize: `14px` }}>
        <Button inline type="inlineLink" href={data.target.slug}>
          {data.target.title}
        </Button>
      </span>
    ),
    [INLINES.ENTRY_HYPERLINK]: ({ data }: any, children: any) => (
      <span style={{ fontSize: `14px` }}>
        <Button inline type="inlineAnchor" href={data.uri}>
          {children}
        </Button>
      </span>
    ),
  },
};

const Richtext: React.FC<Props> = ({ section, color }: Props) => {
  const { title, richtext } = section;
  return (
    <Section>
      <Title color={color}>{title}</Title>
      <Body>{richtext && renderRichText(richtext, options)}</Body>
    </Section>
  );
};

export default Richtext;
