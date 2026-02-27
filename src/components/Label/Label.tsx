import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{ color?: string; disabled?: boolean }>`
  color: ${({ disabled, color }) => (disabled ? "#cccccc" : color || "#000")};
  font-size: 14px;
`;

export const Label: React.FC<LabelProps> = ({ text, color, disabled }) => (
  <StyledLabel color={color} disabled={disabled}>{text}</StyledLabel>
);