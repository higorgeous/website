import React from 'react';
import { connect } from 'react-redux';

import Logo from '@/components/Library/Logo';

import { Wrapper } from './styles';

const Brand: React.FC<any> = ({ menu }) => {
  const isActive = menu ? `true` : undefined;
  return (
    <Wrapper to="/" isactive={isActive}>
      <Logo />
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

export default connect(mapStateToProps)(Brand);
