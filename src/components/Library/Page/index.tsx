import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTheme } from '@/state/actions/layout';

import Left from './components/Left';
import Right from './components/Right';
import { Wrapper } from './styles';

const Page: React.FC<any> = (data: any) => {
  const { queries } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTheme(queries));
  }, []);
  console.log(queries);

  return (
    <Wrapper>
      <Left {...queries} />
      <Right {...queries} />
    </Wrapper>
  );
};

export default Page;
