import { Theme } from '@/styles';
import styled from '@emotion/styled';

type IconProps = {
  isDark: boolean;
};

type ShareCharProps = {
  isDark: boolean;
};

export const Wrapper = styled.div`
  transform: rotate(90deg);
  transform-origin: bottom right;
  margin-right: 56px;
  position: absolute;
  bottom: 20px;
  right: 0;
  font-weight: 500;
  z-index: 999;
  ul {
    transform: rotate(-180deg);
    list-style: none;
    padding-left: 32px;
    display: flex;
  }
`;

export const Icon = styled.li<IconProps>`
  max-width: 0.9em;
  margin-right: 2em;
  margin-bottom: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    img {
      transform: rotate(90deg);
      height: auto;
      width: 100%;
      display: block;
      max-height: 15px;
      filter: ${({ isDark }) => (isDark ? `invert(100%)` : null)};
    }
  }
`;

export const Share = styled.li``;

export const ShareChar = styled.span<ShareCharProps>`
  color: ${({ isDark }) => (isDark ? Theme.palette.light : Theme.palette.dark)};
  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(6),
  &:nth-of-type(7),
  &:nth-of-type(8),
  &:nth-of-type(9) {
    margin-right: -3px;
    font-weight: 200;
  }
  &:nth-of-type(10) {
    font-weight: 200;
    margin-right: 10px;
  }
`;
