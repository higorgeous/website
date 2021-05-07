import React, { useEffect, useRef, useState } from 'react';

import { Wrapper } from './styles';
import Title from './components/Title';
import Content from './components/Content';

type Props = {
  theme: any;
  content: any;
};

const Right: React.FC<Props> = ({ theme, content }: Props) => {
  const { rightColor } = theme;
  const { title, sections } = content.content;

  const [width, setWidth] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setWidth(wrapperRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <Wrapper color={rightColor} ref={wrapperRef}>
      {title && <Title title={title} color={rightColor} width={width} />}
      {sections && <Content sections={sections} />}
    </Wrapper>
  );
};

export default Right;
