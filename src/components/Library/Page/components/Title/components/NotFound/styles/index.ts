import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { Theme } from '@/styles';

type WrapperProps = {
  colorDark: boolean;
};

type TopProps = {
  colorDark: boolean;
};

type BottomBoxProps = {
  colorDark: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  width: 100%;
  max-width: ${Theme.responsive.large};
  margin: 0 auto;
  padding: 0 50px;
  flex-direction: column;
  align-items: center;
  color: ${({ colorDark }) =>
    colorDark ? Theme.palette.light : Theme.palette.dark};
  z-index: 1;
  @media (max-width: ${Theme.responsive.medium}) {
    padding: 0;
  }
`;

export const Top = styled.span<TopProps>`
  display: flex;
  overflow: hidden;
  margin-right: -60%;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid currentColor;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid
    ${({ colorDark }) => (colorDark ? Theme.palette.light : Theme.palette.dark)};
  border-bottom: none;
  @media (max-width: ${Theme.responsive.medium}) {
    margin-right: -40%;
  }
  @media (max-width: ${Theme.responsive.small}) {
    margin-right: -30%;
  }
  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const Heading = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: -1px;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid currentColor;
  background-color: rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 50px;
    margin: 0;
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 30px;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  padding-right: 30%;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: ${Theme.responsive.medium}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const BottomBox = styled(Link)<BottomBoxProps>`
  display: flex;
  overflow: hidden;
  max-width: 35vw;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ colorDark }) => (colorDark ? Theme.palette.light : Theme.palette.dark)};
  border-top: none;
  background-color: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    to right,
    ${Theme.palette.dark},
    ${Theme.palette.dark} 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.5s cubic-bezier(0, 0, 0.23, 1);

  &:hover {
    color: ${Theme.palette.light};
    background-position: 0%;
  }
  &.dark {
    background-image: linear-gradient(
      to right,
      ${Theme.palette.light},
      ${Theme.palette.light} 50%,
      transparent 50%
    );
    &:hover {
      color: ${Theme.palette.dark};
    }
  }
  @media (max-width: ${Theme.responsive.medium}) {
    flex-direction: column;
    min-width: 100%;
  }
  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
