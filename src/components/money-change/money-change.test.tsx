import React from "react";
import MoneyChange from "./money-change";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("should render", () => {
    render(<MoneyChange value={123} />);
  });

  it("should set the sign part to + if the number is positive", () => {
    const component = render(<MoneyChange value={123} />);

    expect(
      component.container.querySelector(".money-change__sign")
    ).toHaveTextContent("+");
  });

  it("should set the sign part to - if the number is negative", () => {
    const component = render(<MoneyChange value={-123} />);

    expect(
      component.container.querySelector(".money-change__sign")
    ).toHaveTextContent("-");
  });

  it("should use the 'positive' class if the number is positive", () => {
    const component = render(<MoneyChange value={123} />);

    expect(component.container.querySelector(".positive")).toBeInTheDocument();
  });

  it("should use the 'negative' class if the number is negative", () => {
    const component = render(<MoneyChange value={-123} />);

    expect(component.container.querySelector(".negative")).toBeInTheDocument();
  });

  it("should always show the absolute value in the value part", () => {
    const component = render(<MoneyChange value={-123} />);

    expect(
      component.container.querySelector(".money-change__value")
    ).toHaveTextContent("123");
  });
});
