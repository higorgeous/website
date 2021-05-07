import React from 'react';

import { Wrapper, Text } from './styles';

type Props = {
  title: string;
  color: string;
  width: number;
};

const Title: React.FC<Props> = ({ title, color, width }: Props) => {
  const titleMap = title.split(``);
  return (
    <Wrapper color={color} width={width}>
      <Text>
        {titleMap.map((i: string, index: number) => {
          const char = i.toLowerCase();
          const altArray = [`o`, `d`, `g`, `c`];
          const alt = altArray.includes(char) ? `alt` : undefined;
          return (
            <span key={index} className={alt}>
              {char}
            </span>
          );
        })}
      </Text>
    </Wrapper>
  );
};

export default Title;
