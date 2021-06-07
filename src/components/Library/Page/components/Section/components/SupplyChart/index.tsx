import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Wrapper } from './styles';

const data = [
  {
    id: `burn`,
    label: `Burn wallet (50%)`,
    value: 50,
  },
  {
    id: `community`,
    label: `Community`,
    value: 38,
  },
  {
    id: `charity`,
    label: `Charity wallet (4%)`,
    value: 4,
  },
  {
    id: `project`,
    label: `Project wallet (4%)`,
    value: 4,
  },
  {
    id: `team`,
    label: `Team wallet (4%)`,
    value: 4,
  },
];

const SupplyChart: React.FC = () => (
  <Wrapper>
    <ResponsivePie
      data={data}
      sortByValue
      innerRadius={0.4}
      padAngle={3}
      cornerRadius={3}
      colors={{ scheme: `purpleRed_green` }}
      borderWidth={2}
      borderColor={{ from: `color`, modifiers: [[`darker`, 0.3]] }}
      enableArcLinkLabels={false}
      // Arc Labels
      arcLabel={(e) => `${e.id} (${e.value})`}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ theme: `background` }}
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
      fill={[
        {
          match: {
            id: `burn`,
          },
          id: `lines`,
        },
        {
          match: {
            id: `charity`,
          },
          id: `dots`,
        },
        {
          match: {
            id: `project`,
          },
          id: `dots`,
        },
        {
          match: {
            id: `team`,
          },
          id: `dots`,
        },
      ]}
      isInteractive={false}
      legends={[
        {
          anchor: `bottom`,
          direction: `row`,
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: `#999`,
          itemDirection: `left-to-right`,
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: `circle`,
          effects: [
            {
              on: `hover`,
              style: {
                itemTextColor: `#000`,
              },
            },
          ],
        },
      ]}
    />
  </Wrapper>
);

export default SupplyChart;
