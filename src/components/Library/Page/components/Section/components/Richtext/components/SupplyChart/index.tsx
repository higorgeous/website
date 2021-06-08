import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { Theme } from '@/styles';

import { Wrapper } from './styles';

const data = [
  {
    id: `burn`,
    label: `Burnt`,
    value: 50,
  },
  {
    id: `community`,
    label: `Community`,
    value: 38,
  },
  {
    id: `charity`,
    label: `Charity`,
    value: 4,
  },
  {
    id: `project`,
    label: `Project`,
    value: 4,
  },
  {
    id: `team`,
    label: `Team`,
    value: 4,
  },
];

const SupplyChart: React.FC<any> = ({ colorDark }) => (
  <Wrapper>
    <ResponsivePie
      data={data}
      colors={{ scheme: `red_blue` }}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      startAngle={0}
      innerRadius={0.4}
      padAngle={3}
      cornerRadius={3}
      borderWidth={2}
      borderColor={{ from: `color`, modifiers: [[`darker`, 0.3]] }}
      arcLinkLabel={(e) => `${e.label} ${e.value}%`}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsDiagonalLength={12}
      arcLinkLabelsStraightLength={10}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={colorDark ? Theme.palette.light : Theme.palette.dark}
      arcLinkLabelsTextColor={
        colorDark ? Theme.palette.light : Theme.palette.dark
      }
      enableArcLabels={false}
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
    />
  </Wrapper>
);

export default SupplyChart;
