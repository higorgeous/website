import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Wrapper, Legend, LegendItem } from './styles';

const data = [
  {
    id: `buy`,
    label: `Max. Buy`,
    value: 2,
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
        top: windowSize.width > 768 ? 70 : 0,
        right: 0,
        bottom: 0,
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
                anchor: `top`,
                direction: `row`,
                justify: false,
                translateX: 0,
                translateY: -60,
                itemsSpacing: 2,
                itemWidth: 120,
                itemHeight: 20,
                itemDirection: `left-to-right`,
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