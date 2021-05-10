import React, { useEffect, useRef, useState } from 'react';

import { Wrapper } from './styles';
import Title from './components/Title';
import Content from './components/Content';

type Props = {
  theme: any;
  contentTitle: string;
  sections: any;
};

const Right: React.FC<Props> = ({ theme, contentTitle, sections }: Props) => {
  const { rightColor } = theme;

  const [width, setWidth] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setWidth(wrapperRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <Wrapper color={rightColor} ref={wrapperRef}>
      {contentTitle && (
        <Title title={contentTitle} color={rightColor} width={width} />
      )}
      {sections && <Content sections={sections} color={rightColor} />}
    </Wrapper>
  );
};

export default Right;
