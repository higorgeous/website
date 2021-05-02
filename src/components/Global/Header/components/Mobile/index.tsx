import React from 'react';
import { useDispatch, connect } from 'react-redux';

import { setMenu } from '@/state/actions/layout';

import { Wrapper } from './styles';

const Mobile: React.FC<any> = ({ menu }) => {
  const dispatch = useDispatch();
  const isActive = menu;
  return (
    <Wrapper isActive={isActive} onClick={() => dispatch(setMenu())}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
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

export default connect(mapStateToProps)(Mobile);
