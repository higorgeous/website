import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { Wrapper, Legend, LegendItem } from './styles';

const data = [
  {
    time: `< 1 hr`,
    seller: 60,
    liquidity: 10,
    holders: 10,
    charity: 10,
    project: 10,
  },
  {
    time: `< 2 hrs`,
    seller: 68,
    liquidity: 8,
    holders: 8,
    charity: 8,
    project: 8,
  },
  {
    time: `Standard`,
    seller: 80,
    liquidity: 5,
    holders: 5,
    charity: 5,
    project: 5,
  },
];

const legendTop = [
  {
    id: `seller`,
    label: `Seller`,
    value: 0,
    color: `rgb(103, 0, 31)`,
  },
  {
    id: `liquidity`,
    label: `Liquidity`,
    value: 0,
    color: `rgb(178, 24, 43)`,
  },
  {
    id: `holders`,
    label: `Holders`,
    value: 0,
    color: `rgb(214, 96, 77)`,
  },
  {
    id: `charity`,
    label: `Charity`,
    value: 0,
    color: `rgb(244, 165, 130)`,
  },
  {
    id: `project`,
    label: `Project`,
    value: 0,
    color: `rgb(253, 219, 199)`,
  },
];

const keys = [`seller`, `liquidity`, `holders`, `charity`, `project`];

const TaxChart: React.FC<any> = ({ colorDark, windowSize }) => (
  <Wrapper colorDark={colorDark}>
    <Legend>
      {legendTop.map((i) => (
        <LegendItem key={i.id} color={i.color}>
          {i.label}
        </LegendItem>
      ))}
    </Legend>
    <ResponsiveBar
      data={data}
      colors={{ scheme: `red_blue` }}
      layout={windowSize.width > 768 ? `horizontal` : `vertical`}
      keys={keys}
      indexBy="time"
      label={(e) => `${e.value}%`}
      margin={{
        top: windowSize.width > 768 ? 50 : 10,
        right: windowSize.width > 768 ? 80 : 20,
        bottom: 50,
        left: windowSize.width > 768 ? 80 : 30,
      }}
      padding={windowSize.width > 768 ? 0.3 : 0.05}
      valueScale={{ type: `linear` }}
      indexScale={{ type: `band`, round: true }}
      borderColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: windowSize.width > 768 ? -30 : 5,
        tickRotation: 0,
        legend: windowSize.width > 768 ? `% burnt` : `sell within`,
        legendPosition: `middle`,
        legendOffset: windowSize.width > 768 ? 0 : 40,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      legends={
        data && windowSize.width > 768
          ? [
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
            ]
          : []
      }
      isInteractive={false}
    />
  </Wrapper>
);

export default TaxChart;
