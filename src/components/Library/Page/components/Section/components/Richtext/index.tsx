import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Link } from 'gatsby';
import React from 'react';
import { handleExternalClick } from '@/utils';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import HoldChart from './components/HoldChart';
import ImagesHover from './components/ImagesHover';
import SupplyChart from './components/SupplyChart';
import TaxChart from './components/TaxChart';

const Richtext: React.FC<any> = (section) => {
  const {
    type,
    richtext,
    images,
    setActiveImage,
    colorDark,
    windowSize,
  } = section;
  const isDark = colorDark ? `dark` : ``;
  return (
    <div>
      {richtext &&
        renderRichText(richtext, {
          renderMark: {
            [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
            [MARKS.ITALIC]: (text: any) => <i>{text}</i>,
            [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
          },

          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
              <p>{children}</p>
            ),
            [BLOCKS.HEADING_1]: (_node: any, children: any) => (
              <h1>{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (_node: any, children: any) => (
              <h1 className={`outline ${isDark}`}>{children}</h1>
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
              <h3 className="alternative">{children}</h3>
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
                    className={`button ${isDark}`}
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
                    {data.target.text}
                  </a>
                );
              }
              return (
                <Link className={`button ${isDark}`} to={data.target?.uri}>
                  {data.target?.text}
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
                href={data.uri}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  handleExternalClick({
                    uri: data.uri,
                    name: children[0],
                  })
                }
              >
                {children}
              </a>
            ),
            [INLINES.ENTRY_HYPERLINK]: ({ data }: any, children: any) => {
              if (data.target.__typename === `ContentfulInfoLinks`) {
                return (
                  <a
                    href={data.target.uri}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      handleExternalClick({
                        uri: data.target.uri,
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
      {type === `Supply chart` && (
        <SupplyChart colorDark={colorDark} windowSize={windowSize} />
      )}
      {type === `Tax chart` && (
        <TaxChart colorDark={colorDark} windowSize={windowSize} />
      )}
      {type === `Hold chart` && (
        <HoldChart colorDark={colorDark} windowSize={windowSize} />
      )}
      {images &&
        type === `Hover images` &&
        images.map((image: { id: string; title: string }) => (
          <ImagesHover
            key={image.id}
            image={image}
            setActiveImage={setActiveImage}
            colorDark={colorDark}
          />
        ))}
    </div>
  );
};

export default Richtext;
