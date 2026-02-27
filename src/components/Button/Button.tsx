import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#cccccc" : backgroundColor || "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.9)};
  }
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, onClick }) => (
  <StyledButton disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
    {label}
  </StyledButton>
);