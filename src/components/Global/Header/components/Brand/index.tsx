import React from 'react';
import { connect } from 'react-redux';

import Logo from '@/components/Library/Logo';

import { Wrapper } from './styles';

const Brand: React.FC<any> = ({ menu, theme }) => {
  const isActive = menu ? `true` : undefined;
  return (
    <Wrapper to="/" isactive={isActive} theme={theme}>
      <Logo />
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

export default connect(mapStateToProps)(Brand);
