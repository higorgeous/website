import React, { ReactNode } from 'react';

import { BtnAnchor, BtnLink, BtnDiv } from './styles';

type Props = {
  children: ReactNode;
  type?: 'anchor' | 'link';
  href?: string;
  onClick?: any;
  isFilled?: boolean;
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  type,
  href,
  onClick,
  isFilled,
  isFullWidth,
}: Props) => {
  switch (type) {
    case `anchor`:
      return (
        <BtnAnchor
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          isFilled={isFilled}
          isFullWidth={isFullWidth}
          onClick={onClick}
        >
          <span className="text">{children}</span>
        </BtnAnchor>
      );
    case `link`:
      return (
        <BtnLink
          to={href}
          isFilled={isFilled}
          isFullWidth={isFullWidth}
          onClick={onClick}
        >
          <span className="text">{children}</span>
        </BtnLink>
      );
    default:
      return (
        <BtnDiv isFilled={isFilled} isFullWidth={isFullWidth} onClick={onClick}>
          <span className="text">{children}</span>
        </BtnDiv>
      );
  }
};

export default Button;
