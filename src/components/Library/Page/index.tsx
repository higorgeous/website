import React from 'react';

import Left from './components/Left';
import Right from './components/Right';

type Props = {
  data: any;
};

const Page: React.FC<Props> = ({ data }: Props) => (
  <main>
    <Left {...data} />
    <Right {...data} />
  </main>
);

export default Page;
