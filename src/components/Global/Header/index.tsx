import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';
import Mobile from './components/Mobile';
import Brand from './components/Brand';
import Icons from './components/Icons';

import { Wrapper } from './styles';

const Header: React.FC<any> = ({ menu, theme }) => {
  const isActive = menu;

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll, { passive: true });

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  const scrollColor = scrollPosition > 430;

  return (
    <Wrapper isActive={isActive} scrollColor={scrollColor} theme={theme}>
      <Navigation theme={theme} />
      <Mobile isActive={isActive} />
      <Brand />
      <Icons theme={theme} />
    </Wrapper>
  );
};

const mapStateToProps = (state: {
  layout: {
    menuPanel: boolean;
    page: {
      theme: {
        leftDark: boolean;
        rightDark: boolean;
      };
    };
  };
}) => ({
  menu: state.layout.menuPanel,
  theme: state.layout.page.theme,
});

export default connect(mapStateToProps)(Header);
