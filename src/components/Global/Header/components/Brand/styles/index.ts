import styled from '@emotion/styled';
import { Link } from 'gatsby';

import theme from '@/styles/Theme';

export const Wrapper = styled(Link)<{ isactive: string }>`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 11em;
  top: 2.75em;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  @media screen and (max-width: ${theme.responsive.large}) {
    top: 1.25em;
    top: ${({ isactive }) => (isactive === `true` ? `4em` : `1.25em`)};
  }
`;
