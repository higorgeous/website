import React from 'react';

import { Wrapper, Top, Heading, Bottom, BottomBox } from './styles';

const NotFound: React.FC<any> = ({ colorDark }) => {
  const isDark = colorDark ? `dark` : ``;

  return (
    <Wrapper colorDark={colorDark}>
      <Top className={`no-style ${isDark}`} colorDark={colorDark}>
        <p>Page not found</p>
      </Top>
      <Heading>
        <h1 className={`outline ${isDark}`}>
          We looked all over, but that page seems to have gotten away from us.
        </h1>
      </Heading>
      <Bottom>
        <BottomBox
          className={`no-style ${isDark}`}
          colorDark={colorDark}
          to="/"
        >
          <p>View home page</p>
        </BottomBox>
      </Bottom>
    </Wrapper>
  );
};

export default NotFound;
