import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Wrapper, Legend, LegendItem } from './styles';

const data = [
  {
    id: `burn`,
    label: `Burnt`,
    value: 50,
    color: `#D33E43`,
  },
  {
    id: `liquidity`,
    label: `Liquidity`,
    value: 40,
    color: `#D33E43`,
  },
  {
    id: `charity`,
    label: `Charity`,
    value: 4,
    color: `#D33E43`,
  },
  {
    id: `project`,
    label: `Project`,
    value: 4,
    color: `#C82D32`,
  },
  {
    id: `team`,
    label: `Team`,
    value: 2,
    color: `#A6262A`,
  },
];

const colors = {
  burn: `#D33E43`,
  liquidity: `#D33E43`,
  charity: `#D33E43`,
  project: `#C82D32`,
  team: `#A6262A`,
};

const getColor = (bar) => colors[bar.id];

const SupplyChart: React.FC<any> = ({ colorDark, windowSize }) => (
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
      colors={getColor}
      margin={{
        top: 0,
        right: 0,
        bottom: windowSize.width > 768 ? 70 : 0,
        left: 0,
      }}
      startAngle={0}
      innerRadius={0.4}
      padAngle={1}
      cornerRadius={3}
      borderWidth={1}
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

export default SupplyChart;
