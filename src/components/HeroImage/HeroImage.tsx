import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  position: absolute;
  top: 20%;
  left: 10%;
  color: white;
`;

const Subtitle = styled.h3`
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, subtitle, disabled }) => (
  <Container disabled={disabled}>
    <StyledImg src={src} alt={alt} />
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Container>
);