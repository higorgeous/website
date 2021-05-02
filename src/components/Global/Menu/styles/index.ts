import styled from '@emotion/styled';

import theme from '@/styles/Theme';

export const Wrapper = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 13em;
  background-color: ${theme.palette.pink};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transition: all 0.6s ease;
  visibility: ${({ isActive }) => (isActive ? `visible` : `hidden`)};
  transform: ${({ isActive }) =>
    isActive ? `translateY(0%)` : `translateY(-100%)`};
  @media screen and (min-width: ${theme.responsive.large}) {
    display: none;
  }
  &::after {
    clear: both;
    content: '';
    display: table;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2em;
`;
