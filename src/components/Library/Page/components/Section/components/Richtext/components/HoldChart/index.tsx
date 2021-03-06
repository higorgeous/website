import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Wrapper, Legend, LegendItem } from './styles';

const data = [
  {
    id: `buy`,
    label: `Max. Buy`,
    value: 1,
    color: `rgb(103, 0, 31)`,
  },
  {
    id: `hold`,
    label: `Max. Hold`,
    value: 4,
    color: `rgb(178, 24, 43)`,
  },
];

const HoldChart: React.FC<any> = ({ colorDark, windowSize }) => (
  <Wrapper colorDark={colorDark}>
    <Legend>
      {data.map((i) => (
        <LegendItem key={i.id} color={i.color}>
          {i.label}
        </LegendItem>
      ))}
    </Legend>
    <ResponsivePie
      data={data}
      colors={{ scheme: `red_blue` }}
      margin={{
        top: 0,
        right: 0,
        bottom: windowSize.width > 768 ? 70 : 0,
        left: 0,
      }}
      startAngle={-90}
      endAngle={90}
      innerRadius={0.4}
      padAngle={3}
      cornerRadius={3}
      borderWidth={2}
      borderColor={{ from: `color`, modifiers: [[`darker`, 0.3]] }}
      enableArcLinkLabels={false}
      arcLabelsTextColor="#ffffff"
      arcLabel={(e) => `${e.value}%`}
      isInteractive={false}
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
            id: `buy`,
          },
          id: `lines`,
        },
        {
          match: {
            id: `hold`,
          },
          id: `dots`,
        },
      ]}
      legends={
        data && windowSize.width > 768
          ? [
              {
                anchor: `bottom`,
                direction: `row`,
                justify: false,
                translateX: 0,
                translateY: 50,
                itemsSpacing: 2,
                itemWidth: 120,
                itemHeight: 20,
                itemDirection: `top-to-bottom`,
                itemOpacity: 0.85,
                symbolSize: 20,
              },
            ]
          : []
      }
    />
  </Wrapper>
);

export default HoldChart;
