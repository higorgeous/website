import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Wrapper, Legend, LegendItem } from './styles';

const data = [
  {
    id: `seller`,
    label: `Seller`,
    value: 85,
    color: `#67001f`,
  },
  {
    id: `liquidity`,
    label: `Liquidity`,
    value: 4,
    color: `#D33E43`,
  },
  {
    id: `holders`,
    label: `holders`,
    value: 4,
    color: `#723163`,
  },
  {
    id: `charity`,
    label: `Charity`,
    value: 3,
    color: `#D33E43`,
  },
  {
    id: `project`,
    label: `Project`,
    value: 3,
    color: `#C82D32`,
  },
  {
    id: `burn`,
    label: `Burn`,
    value: 1,
    color: `#A6262A`,
  },
];

const colors = {
  seller: `#67001f`,
  liquidity: `#D33E43`,
  holders: `#723163`,
  charity: `#D33E43`,
  project: `#C82D32`,
  burn: `#A6262A`,
};

const getColor = (bar) => colors[bar.id];

const TaxChart: React.FC<any> = ({ colorDark, windowSize }) => (
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
        top: windowSize.width > 768 ? 70 : 0,
        right: 0,
        bottom: 0,
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
          id: `lines`,
        },
        {
          match: {
            id: `project`,
          },
          id: `lines`,
        },
        {
          match: {
            id: `holders`,
          },
          id: `lines`,
        },
        {
          match: {
            id: `liquidity`,
          },
          id: `lines`,
        },
        {
          match: {
            id: `seller`,
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

export default TaxChart;
