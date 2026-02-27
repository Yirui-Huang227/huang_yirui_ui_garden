import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "#fff")};
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: 768px) {
    padding: 0.6rem;
    font-size: 1.1rem;
    width: auto;
  }

  @media (min-width: 1200px) {
    padding: 0.75rem;
    font-size: 1.2rem;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, disabled, onChange }) => (
  <StyledSelect value={selected} disabled={disabled} onChange={e => onChange?.(e.target.value)}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </StyledSelect>
);