import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "#cccccc" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, disabled, onChange }) => (
  <StyledLabel disabled={disabled}>
    <input type="radio" checked={checked} disabled={disabled} onChange={onChange} />
    {label}
  </StyledLabel>
);