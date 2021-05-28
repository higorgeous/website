import { Theme } from '@/styles';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 120px;
  left: 0;
  bottom: 0;
  padding: 150px 56px 56px;
  align-items: flex-start;
  justify-content: space-evenly;
  width: calc(100% - 100px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 9998;
  @media (max-width: ${Theme.responsive.large}) {
    width: 100%;
    padding: 350px 28px 150px;
    flex-direction: column;
  }
  @media (max-width: ${Theme.responsive.medium}) {
    top: 80px;
    padding: 600px 28px 150px;
  }
  @media (max-width: ${Theme.responsive.small}) {
    padding: 650px 28px 150px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    text-align: left;
    @media (max-width: ${Theme.responsive.large}) {
      text-align: center;
      width: 100%;
      padding: 0;
      margin-top: 100px;
      &:first-of-type {
        margin-top: 300px;
      }
    }
    &.social {
      li {
        display: inline-block;
        margin: 20px;
        border: 1px solid ${Theme.palette.light};
        border-radius: 50%;
        padding: 10px;
        &:first-of-type {
          margin: 0 0 20px;
          border: none;
          padding: 0;
        }
      }

      @media (min-width: ${Theme.responsive.large}) {
        display: none;
      }
    }
    li {
      list-style: none;
      margin-bottom: 20px;
      a {
        &.active {
          pointer-events: none;
          cursor: default;
          span {
            text-decoration-line: line-through;
            pointer-events: none;
          }
        }
      }
      span {
        opacity: 0.8;
        position: relative;
        display: block;
        margin: 0 auto;
        font-size: 40px;
        font-weight: 900;
        text-transform: uppercase;
        text-decoration: none;
        -webkit-text-stroke: 0.02em ${Theme.palette.light};
        color: transparent;
        cursor: pointer;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          to right,
          white,
          white 50%,
          transparent 50%
        );
        background-size: 200% 100%;
        background-position: 100%;
        transition: all 0.5s cubic-bezier(0, 0, 0.23, 1);
        word-spacing: 10px;
        letter-spacing: 1px;
        &::after {
          display: block;
          -webkit-text-stroke: 0px;
          -webkit-text-fill-color: ${Theme.palette.light};
          content: attr(data-section);
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: 20px;
          transform: translate(-40px, 8px);
          letter-spacing: 2px;
          @media (max-width: ${Theme.responsive.large}) {
            display: none;
          }
        }
        &:hover {
          background-position: 0%;
        }
      }
      &:first-of-type {
        position: relative;
        display: block;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        color: ${Theme.palette.light};
        opacity: 0.2;
        @media (max-width: ${Theme.responsive.medium}) {
          font-size: 25px;
        }
      }
    }
  }
`;
