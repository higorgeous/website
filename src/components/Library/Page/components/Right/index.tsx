import React from 'react';

import { Wrapper } from './styles';

type Props = {
  color?: string;
};

const Right: React.FC<Props> = ({ color }: Props) => (
  <Wrapper color={color}>Right Content</Wrapper>
);

export default Right;
