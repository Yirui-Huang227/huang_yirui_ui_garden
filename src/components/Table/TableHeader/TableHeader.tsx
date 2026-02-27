import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledHeader = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ disabled, backgroundColor }) => (disabled ? "#f5f5f5" : backgroundColor || "#e0e0e0")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled, backgroundColor, className, style }) => {
  return (
    <StyledHeader disabled={disabled} backgroundColor={backgroundColor} className={className} style={style}>
      {children}
    </StyledHeader>
  );
};