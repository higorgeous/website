import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { Wrapper } from './styles';

const data = [
  {
    time: `< 1 hr`,
    seller: 50,
    liquidity: 16,
    holders: 16,
    charity: 9,
    project: 9,
  },
  {
    time: `< 2 hrs`,
    seller: 60,
    liquidity: 13,
    holders: 13,
    charity: 7,
    project: 7,
  },
  {
    time: `Standard`,
    seller: 70,
    liquidity: 10,
    holders: 10,
    charity: 5,
    project: 5,
  },
];

const TaxChart: React.FC<any> = ({ colorDark, windowSize }) => (
  <Wrapper colorDark={colorDark}>
    <ResponsiveBar
      data={data}
      colors={{ scheme: `red_blue` }}
      layout={windowSize.width > 769 ? `horizontal` : `vertical`}
      keys={[`seller`, `liquidity`, `holders`, `charity`, `project`]}
      indexBy="time"
      label={(e) => `${e.value}%`}
      margin={{
        top: 50,
        right: windowSize.width > 769 ? 80 : 20,
        bottom: windowSize.width > 769 ? 50 : 100,
        left: windowSize.width > 769 ? 80 : 30,
      }}
      padding={windowSize.width > 769 ? 0.3 : 0.05}
      valueScale={{ type: `linear` }}
      indexScale={{ type: `band`, round: true }}
      borderColor={{ from: `color`, modifiers: [[`darker`, 1.6]] }}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: windowSize.width > 769 ? `% burnt` : `sell within`,
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
          anchor: windowSize.width > 769 ? `top` : `bottom`,
          direction: `row`,
          justify: false,
          translateX: 0,
          translateY: windowSize.width > 769 ? -10 : 100,
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
