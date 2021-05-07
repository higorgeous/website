import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTheme } from '@/state/actions/layout';

import Left from './components/Left';
import Right from './components/Right';
import { Wrapper } from './styles';

type Props = {
  data: any;
};

const Page: React.FC<Props> = ({ data }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTheme(data));
  }, []);
  return (
    <Wrapper>
      <Left {...data} />
      <Right {...data} />
    </Wrapper>
  );
};

export default Page;
