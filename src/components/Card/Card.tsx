import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean }>`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ disabled }) =>
    disabled ? "#f5f5f5" : "#ffffff"};
  color: ${({ disabled }) =>
    disabled ? "#cccccc" : "#000000"};
`;

const CardTitle = styled.h2`
  margin: 0 0 0.5rem 0;
`;

const CardContent = styled.p`
  margin: 0;
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  disabled,
}) => {
  return (
    <StyledCard disabled={disabled} data-testid="card-container">
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
};