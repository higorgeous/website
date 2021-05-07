import React from 'react';
import { useDispatch } from 'react-redux';

import { setMenu } from '@/state/actions/layout';

import { Wrapper } from './styles';

type Props = {
  isActive: boolean;
};

const Mobile: React.FC<Props> = ({ isActive }: Props) => {
  const dispatch = useDispatch();
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

export default Mobile;
