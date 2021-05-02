import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  onClick?: any;
  isFilled?: boolean;
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  isFilled,
  isFullWidth,
}: Props) => (
  <Wrapper isFilled={isFilled} isFullWidth={isFullWidth} onClick={onClick}>
    <span className="text">{children}</span>
  </Wrapper>
);

export default Button;
