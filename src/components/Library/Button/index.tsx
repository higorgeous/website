import React, { ReactNode } from 'react';

import { BtnAnchor, BtnLink, BtnDiv, InlineWrapper } from './styles';

type Props = {
  children: ReactNode;
  type?: 'anchor' | 'link' | 'inlineAnchor' | 'inlineLink';
  href?: string;
  onClick?: any;
  isFilled?: boolean;
  isFullWidth?: boolean;
  inline?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  type,
  href,
  onClick,
  isFilled,
  isFullWidth,
  inline,
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
          inline={inline}
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
          inline={inline}
          onClick={onClick}
        >
          <span className="text">{children}</span>
        </BtnLink>
      );
    case `inlineAnchor`:
      return (
        <InlineWrapper>
          <BtnAnchor
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            isFilled={isFilled}
            isFullWidth={isFullWidth}
            inline={inline}
            onClick={onClick}
          >
            <span className="text">{children}</span>
          </BtnAnchor>
        </InlineWrapper>
      );
    case `inlineLink`:
      return (
        <InlineWrapper>
          <BtnLink
            to={href}
            isFilled={isFilled}
            isFullWidth={isFullWidth}
            inline={inline}
            onClick={onClick}
          >
            <span className="text">{children}</span>
          </BtnLink>
        </InlineWrapper>
      );
    default:
      return (
        <BtnDiv
          isFilled={isFilled}
          isFullWidth={isFullWidth}
          inline={inline}
          onClick={onClick}
        >
          <span className="text">{children}</span>
        </BtnDiv>
      );
  }
};

export default Button;
