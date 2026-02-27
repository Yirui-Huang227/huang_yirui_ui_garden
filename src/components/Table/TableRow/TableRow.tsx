import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledRow = styled.tr<{ hover?: boolean; selected?: boolean; disabled?: boolean }>`
  background-color: ${({ selected, disabled }) =>
    disabled ? "#f5f5f5" : selected ? "#e0f7fa" : "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};

  &:hover {
    background-color: ${({ hover, disabled }) => (hover && !disabled ? "#f1f1f1" : undefined)};
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ children, hover, selected, disabled, className, style }) => {
  return (
    <StyledRow hover={hover} selected={selected} disabled={disabled} className={className} style={style}>
      {children}
    </StyledRow>
  );
};