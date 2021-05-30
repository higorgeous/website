import styled from '@emotion/styled';

type WrapperProps = {
  desktop: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: ${({ desktop }) => (desktop ? `relative` : `fixed`)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: ${({ desktop }) => (desktop ? `visible` : `hidden`)}; ;
`;
