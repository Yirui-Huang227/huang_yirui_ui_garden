import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledFooter = styled.tfoot<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ disabled, backgroundColor }) => (disabled ? "#f5f5f5" : backgroundColor || "#e0e0e0")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

export const TableFooter: React.FC<TableFooterProps> = ({ children, disabled, backgroundColor, className, style }) => {
  return (
    <StyledFooter disabled={disabled} backgroundColor={backgroundColor} className={className} style={style}>
      {children}
    </StyledFooter>
  );
};