import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Link } from 'gatsby';
import React from 'react';
import { handleExternalClick } from '@/utils';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Answer: React.FC<any> = ({ answer }) => (
  <div>
    {answer &&
      renderRichText(answer, {
        renderMark: {
          [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
          [MARKS.ITALIC]: (text: any) => <i>{text}</i>,
          [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
        },

        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
          [BLOCKS.HEADING_1]: (_node: any, children: any) => (
            <h1>{children}</h1>
          ),
          [BLOCKS.HEADING_2]: (_node: any, children: any) => (
            <h1 className="outline">{children}</h1>
          ),
          [BLOCKS.HEADING_3]: (_node: any, children: any) => (
            <h2>{children}</h2>
          ),
          [BLOCKS.HEADING_4]: (_node: any, children: any) => (
            <h2>{children}</h2>
          ),
          [BLOCKS.HEADING_5]: (_node: any, children: any) => (
            <h3>{children}</h3>
          ),
          [BLOCKS.HEADING_6]: (_node: any, children: any) => (
            <h3 className="alternative">{children}</h3>
          ),
          [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
            <li>{children}</li>
          ),
          [BLOCKS.EMBEDDED_ASSET]: ({ data }: any) => (
            <GatsbyImage
              image={getImage(data.target)}
              alt={data.target.title}
            />
          ),
          [BLOCKS.EMBEDDED_ENTRY]: ({ data }: any) => {
            if (data.target?.__typename === `ContentfulInfoLinks`) {
              return (
                <a
                  className="button"
                  href={data.target?.uri}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    handleExternalClick({
                      uri: data.target?.uri,
                      name: data.target?.text,
                    })
                  }
                >
                  {data.target?.text}
                </a>
              );
            }
            return (
              <Link className="button" to={data.target?.uri}>
                {data.target.text}
              </Link>
            );
          },
          [INLINES.EMBEDDED_ENTRY]: ({ data }: any) => {
            if (data.target?.__typename === `ContentfulInfoLinks`) {
              return (
                <a
                  href={data.target?.uri}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    handleExternalClick({
                      uri: data.target?.uri,
                      name: data.target?.text,
                    })
                  }
                >
                  {data.target?.text}
                </a>
              );
            }
            return <Link to={data.target?.uri}>{data.target?.text}</Link>;
          },
          [INLINES.HYPERLINK]: ({ data }: any, children: any) => (
            <a
              href={data?.uri}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                handleExternalClick({
                  uri: data?.uri,
                  name: children[0],
                })
              }
            >
              {children}
            </a>
          ),
          [INLINES.ENTRY_HYPERLINK]: ({ data }: any, children: any) => {
            if (data.target?.__typename === `ContentfulInfoLinks`) {
              return (
                <a
                  href={data.target?.uri}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    handleExternalClick({
                      uri: data.target?.uri,
                      name: children[0],
                    })
                  }
                >
                  {children}
                </a>
              );
            }
            return <Link to={data.target?.uri}>{children}</Link>;
          },
        },
      })}
  </div>
);

export default Answer;
