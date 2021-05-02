import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  click?: any;
  isFilled?: boolean;
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  click,
  isFilled,
  isFullWidth,
}: Props) => (
  <Wrapper isFilled={isFilled} isFullWidth={isFullWidth} onClick={click}>
    <span className="text">{children}</span>
  </Wrapper>
);

export default Button;
