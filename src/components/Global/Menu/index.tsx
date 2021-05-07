import React from 'react';
import { connect } from 'react-redux';

import { Wrapper, Inner } from './styles';
import Navigation from './components/Navigation';
import SecondaryNavigation from './components/SecondaryNavigation';
import Footer from './components/Footer';

const Menu: React.FC<any> = ({ menu }) => {
  const isActive = menu;
  return (
    <Wrapper isActive={isActive}>
      <Inner isActive={isActive}>
        <Navigation />
        <SecondaryNavigation />
        <Footer />
      </Inner>
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

export default connect(mapStateToProps)(Menu);
