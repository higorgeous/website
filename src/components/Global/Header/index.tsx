import React from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';
import Mobile from './components/Mobile';
import Brand from './components/Brand';
import Icons from './components/Icons';

import { Wrapper } from './styles';

const Header: React.FC<any> = ({ menu }) => {
  const isActive = menu;
  return (
    <Wrapper isActive={isActive}>
      <Navigation />
      <Mobile />
      <Brand />
      <Icons />
    </Wrapper>
  );
};

const mapStateToProps = (state: {
  layout: {
    menuPanel: boolean;
  };
}) => ({
  menu: state.layout.menuPanel,
});

export default connect(mapStateToProps)(Header);
