import { Theme } from '@/styles';
import styled from '@emotion/styled';

type CharacterProps = {
  isDark: boolean;
};

export const Wrapper = styled.div`
  transform: rotate(-90deg);
  transform-origin: bottom left;
  margin-left: 56px;
  position: absolute;
  bottom: 20px;
  left: 0;
  font-weight: 500;
  ul {
    list-style: none;
    padding-left: 28px;
  }
`;

export const Character = styled.span<CharacterProps>`
  color: ${({ isDark }) => (isDark ? Theme.palette.light : Theme.palette.dark)};
`;
