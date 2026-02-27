import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "#fff")};
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