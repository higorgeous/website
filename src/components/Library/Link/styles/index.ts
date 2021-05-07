import styled from '@emotion/styled';
import { Link } from 'gatsby';

import theme from '@/styles/Theme';

export const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  text-decoration: none;
  margin-right: 12px;
  &::before {
    margin-right: 8px;
    content: '‣';
  }
  image {
    display: block;
    height: 1.4vw;
    margin-right: 0.6vw;
  }
  span {
    display: block;
    font-family: ${theme.font.header};
    color: currentColor;
    height: 0.9em;
    font-size: 1.25em;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-decoration: none;
    text-transform: uppercase;
    font-feature-settings: 'aalt';
  }
`;
