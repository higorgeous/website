import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Wrapper = styled.div`
  letter-spacing: 2px;
  font-size: 12px;
  position: fixed;
  z-index: 999;
  padding: 24px 28px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  pointer-events: none;
  text-transform: uppercase;
  transform: translateY(0) !important;
  @media (min-width: ${Theme.responsive.medium}) {
    padding: 48px 56px;
  }
`;
