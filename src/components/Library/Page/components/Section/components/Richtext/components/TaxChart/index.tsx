import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { Theme } from '@/styles';

import { Wrapper } from './styles';

const data = [
  {
    time: `< 1 hr`,
    seller: 60,
    liquidity: 15,
    holders: 15,
    charity: 5,
    project: 5,
  },
  {
    time: `< 2 hrs`,
    seller: 80,
    liquidity: 7,
    holders: 7,
    charity: 3,
    project: 3,
  },
  {
    time: `Standard`,
    seller: 90,
    liquidity: 3,
    holders: 3,
    charity: 2,
    project: 2,
  },
];

const TaxChart: React.FC<any> = ({ colorDark }) => (
  <Wrapper colorDark={colorDark}>
    <ResponsiveBar
      data={data}
      colors={{ scheme: `red_blue` }}
      layout="horizontal"
      keys={[`seller`, `liquidity`, `holders`, `charity`, `project`]}
      indexBy="time"
      margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: `linear` }}
      indexScale={{ type: `band`, round: true }}
      defs={[
        {
          id: `dots`,
          type: `patternDots`,
          background: `inherit`,
          color: `rgba(255, 255, 255, 0.3)`,
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: `lines`,
          type: `patternLines`,
          background: `inherit`,
          color: `rgba(255, 255, 255, 0.3)`,
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      // fill={[
      //   // {
      //   //   match: {
      //   //     id: `seller`,
      //   //   },
      //   //   id: `lines`,
      //   // },
      //   // {
      //   //   match: {
      //   //     id: `liquidity`,
      //   //   },
      //   //   id: `dots`,
      //   // },
      //   // {
      //   //   match: {
      //   //     id: `holders`,
      //   //   },
      //   //   id: `lines`,
      //   // },
      //   // {
      //   //   match: {
      //   //     id: `charity`,
      //   //   },
      //   //   id: `lines`,
      //   // },
      //   // {
      //   //   match: {
      //   //     id: `project`,
      //   //   },
      //   //   id: `lines`,
      //   // },
      // ]}
      borderColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `% Burnt`,
        legendPosition: `middle`,
        legendOffset: 40,
      }}
      // axisLeft={{
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: `% Burnt`,
      //   legendPosition: `middle`,
      //   legendOffset: -40,
      // }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      legends={[
        {
          dataFrom: `keys`,
          anchor: `top`,
          direction: `row`,
          justify: false,
          translateX: 0,
          translateY: -10,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: `left-to-right`,
          itemOpacity: 0.85,
          symbolSize: 20,
        },
      ]}
      isInteractive={false}
    />
  </Wrapper>
);

export default TaxChart;
