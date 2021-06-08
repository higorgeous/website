import { Theme } from '@/styles';
import styled from '@emotion/styled';

type WrapperProps = {
  colorDark: boolean;
};

type LegendItemProps = {
  color: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 450px;
  z-index: 2;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  @media (min-width: ${Theme.responsive.medium}) {
    height: 500px;
  }
  svg {
    text {
      font-family: ${Theme.font} !important;
      font-size: 50% !important;
      font-weight: 900 !important;
      text-transform: uppercase !important;
      fill: ${({ colorDark }) =>
        colorDark ? Theme.palette.light : Theme.palette.dark} !important;
      @media (max-width: ${Theme.responsive.medium}) {
        font-size: 40% !important;
      }
    }
  }
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: ${Theme.responsive.medium}) {
    display: none;
  }
`;

export const LegendItem = styled.div<LegendItemProps>`
  font-family: ${Theme.font} !important;
  font-size: 40% !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  margin-right: 20px;
  margin-bottom: 20px;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background: ${({ color }) => color};
  }
`;
