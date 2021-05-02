import styled from '@emotion/styled';

import theme from '@/styles/Theme';
import { Link } from 'gatsby';

export const Wrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: block;
  height: 1.25em;
  font-family: ${theme.font.header};
  color: ${theme.palette.dark};
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.palette.light};
  }
  &[aria-current='page'] {
    color: ${theme.palette.light};
  }
`;
