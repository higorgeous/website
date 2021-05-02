import React from 'react';
import { connect } from 'react-redux';

import { Wrapper, Inner } from './styles';
import Navigation from './components/Navigation';
import CTA from './components/CTA';

const Menu: React.FC<any> = ({ menu }) => {
  const isActive = menu;
  return (
    <Wrapper isActive={isActive}>
      <Inner>
        <Navigation />
        <CTA />
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
