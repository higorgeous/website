/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { isBrowser } from '@/utils';
import { Ring, Dot } from './styles';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor: React.FC = () => {
  if (typeof navigator !== `undefined` && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    if (isBrowser)
      document.querySelectorAll(`a`).forEach((el) => {
        el.addEventListener(`mouseover`, () => setLinkHovered(true));
        el.addEventListener(`mouseout`, () => setLinkHovered(false));
      });
    if (isBrowser)
      document.querySelectorAll(`#trigger`).forEach((el) => {
        el.addEventListener(`mouseover`, () => setLinkHovered(true));
        el.addEventListener(`mouseout`, () => setLinkHovered(false));
      });
  };

  const addEventListeners = () => {
    if (isBrowser) document.addEventListener(`mousemove`, onMouseMove);
    if (isBrowser) document.addEventListener(`mouseenter`, onMouseEnter);
    if (isBrowser) document.addEventListener(`mouseleave`, onMouseLeave);
    if (isBrowser) document.addEventListener(`mousedown`, onMouseDown);
    if (isBrowser) document.addEventListener(`mouseup`, onMouseUp);
  };

  const removeEventListeners = () => {
    if (isBrowser) document.removeEventListener(`mousemove`, onMouseMove);
    if (isBrowser) document.removeEventListener(`mouseenter`, onMouseEnter);
    if (isBrowser) document.removeEventListener(`mouseleave`, onMouseLeave);
    if (isBrowser) document.removeEventListener(`mousedown`, onMouseDown);
    if (isBrowser) document.removeEventListener(`mouseup`, onMouseUp);
  };

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const cursorClasses = classNames(`cursor`, {
    'cursor--clicked': clicked,
    'cursor--hidden': hidden,
    'cursor--link-hovered': linkHovered,
  });

  return (
    <>
      <Ring
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <Dot
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default Cursor;
