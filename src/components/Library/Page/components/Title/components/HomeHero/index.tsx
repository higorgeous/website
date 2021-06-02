import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { handleExternalClick } from '@/utils';
import { Wrapper, Top, Heading, Bottom, BottomBox } from './styles';

const HomeHero: React.FC<any> = ({ title, colorDark }) => {
  const isDark = colorDark ? `dark` : ``;

  const data = useStaticQuery(
    graphql`
      query {
        info: contentfulInfoGlobalInformation(
          id: { eq: "62f30e7f-d2df-5fba-9384-d2656abd46b8" }
        ) {
          tokenCode
        }
        chart: contentfulInfoLinks(
          id: { eq: "6832c26a-2de9-501a-b00b-7500e6041c37" }
        ) {
          uri
          text
        }
        contract: contentfulInfoLinks(
          id: { eq: "71494009-e111-58ef-8378-0fd1837ddbcf" }
        ) {
          uri
          text
        }
        pancakeswap: contentfulInfoLinks(
          id: { eq: "2d1a0537-de2a-5a3a-befe-7bda5d489ace" }
        ) {
          uri
          text
        }
      }
    `,
  );

  return (
    <Wrapper colorDark={colorDark}>
      <Top
        className={`no-style ${isDark}`}
        colorDark={colorDark}
        href={data.chart.uri}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          handleExternalClick({
            uri: data.chart.uri,
            name: data.chart.text,
          })
        }
      >
        <p>{data.info.tokenCode}</p>
      </Top>
      <Heading>
        <h1 className={`outline ${isDark}`}>{title}</h1>
      </Heading>
      <Bottom>
        <BottomBox
          className={`no-style ${isDark}`}
          colorDark={colorDark}
          href={data.contract.uri}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            handleExternalClick({
              uri: data.contract.uri,
              name: data.contract.text,
            })
          }
        >
          <p>View contract</p>
        </BottomBox>
        <BottomBox
          className={`no-style ${isDark}`}
          colorDark={colorDark}
          href={data.pancakeswap.uri}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            handleExternalClick({
              uri: data.pancakeswap.uri,
              name: data.pancakeswap.text,
            })
          }
        >
          <p>Get on Pancakeswap</p>
        </BottomBox>
      </Bottom>
    </Wrapper>
  );
};

export default HomeHero;
