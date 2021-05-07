import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  to: string;
};

const Link: React.FC<Props> = ({ children, to }: Props) => (
  <Wrapper to={to}>{children}</Wrapper>
);

export default Link;
