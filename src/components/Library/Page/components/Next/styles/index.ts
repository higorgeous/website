import styled from '@emotion/styled';

import { Theme } from '@/styles';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Theme.palette.light};
  background: ${Theme.palette.red};
  padding: 0 30px;
  z-index: 97;
  @media (max-width: ${Theme.responsive.large}) {
    padding: 0 50px;
  }
`;

export const NextTitle = styled.span`
  position: relative;
  display: block;
  width: max-content;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: ${Theme.palette.light};
  @media (max-width: ${Theme.responsive.medium}) {
    font-size: 18px;
  }
  @media (max-width: ${Theme.responsive.small}) {
    font-size: 16px;
  }
`;

export const NextLink = styled.div`
  margin-top: 0.25em;
  a {
    position: relative;
    display: block;
    width: max-content;
    margin: 0 auto;
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    -webkit-text-stroke: 0.02em ${Theme.palette.light};
    color: transparent;
    cursor: pointer;
    @media (max-width: ${Theme.responsive.large}) {
      font-size: 50px;
    }
    @media (max-width: ${Theme.responsive.medium}) {
      font-size: 40px;
    }
    @media (max-width: ${Theme.responsive.small}) {
      font-size: 30px;
    }
    &::before {
      position: absolute;
      display: inline;
      white-space: nowrap;
      top: 0px;
      left: 0px;
      content: attr(data-fill);
      width: 0px;
      height: 100%;
      -webkit-text-stroke: 0px;
      -webkit-text-fill-color: transparent;
      background: ${Theme.palette.light};
      background-clip: text;
      transition: all 0.7s cubic-bezier(0.19, 1, 0.4, 1) 0s;
    }
    &::after {
      display: block;
      -webkit-text-stroke: 0px;
      -webkit-text-fill-color: ${Theme.palette.light};
      content: attr(data-section);
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 25px;
      transform: translate(-45px, 10px);
      letter-spacing: 2px;
      @media (max-width: ${Theme.responsive.large}) {
        display: none;
      }
    }
    &:hover {
      &::before {
        background-clip: text;
        width: 100%;
      }
    }
  }
`;
