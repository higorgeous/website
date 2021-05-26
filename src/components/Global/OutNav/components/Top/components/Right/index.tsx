import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setMenu } from '@/state/actions/layout';

import { Wrapper } from './styles';

type Props = {
  colorDark: boolean;
};

const Right: React.FC<Props> = ({ colorDark }: Props) => {
  const dispatch = useDispatch();
  const menuPanel = useSelector(
    (state: { layout: { menuPanel: boolean } }) => state.layout.menuPanel,
  );
  return (
    <Wrapper
      colorDark={colorDark}
      menuPanel={menuPanel}
      onClick={() => dispatch(setMenu())}
    >
      <span />
      <span />
      <span />
      <span />
    </Wrapper>
  );
};

export default Right;
