import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { TableCell } from "./TableCell";

describe("TableCell Component", () => {
  test("renders cell content", () => {
    render(<TableCell>Test Cell</TableCell>);
    expect(screen.getByText("Test Cell")).toBeVisible();
  });

  test("applies disabled styles correctly", () => {
    const { container } = render(<TableCell disabled>Disabled Cell</TableCell>);
    const cell = container.querySelector("td");
    expect(cell).toHaveStyleRule("background-color", "#f5f5f5");
    expect(cell).toHaveStyleRule("cursor", "not-allowed");
  });
});