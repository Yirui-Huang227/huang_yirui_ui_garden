import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "100px"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => (
  <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />
);