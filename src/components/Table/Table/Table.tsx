import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean; backgroundColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? "#f5f5f5" : backgroundColor || "#ffffff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

export const Table: React.FC<TableProps> = ({ children, disabled, backgroundColor, className, style }) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor} className={className} style={style}>
      {children}
    </StyledTable>
  );
};