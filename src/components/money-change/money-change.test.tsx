import React from "react";
import MoneyChange from "./money-change";
import { render } from "@testing-library/react";
import { MoneyChangeEntry } from "../../models/money-change-entry";

const positiveValue: MoneyChangeEntry = { id: 1, value: 123 };
const negativeValue: MoneyChangeEntry = { id: 1, value: -123 };

describe("when the component loads", () => {
  it("should render", () => {
    render(<MoneyChange moneyChangeEntry={positiveValue} />);
  });

  it("should set the sign part to + if the number is positive", () => {
    const component = render(<MoneyChange moneyChangeEntry={positiveValue} />);

    expect(
      component.container.querySelector(".money-change__sign")
    ).toHaveTextContent("+");
  });

  it("should set the sign part to - if the number is negative", () => {
    const component = render(<MoneyChange moneyChangeEntry={negativeValue} />);

    expect(
      component.container.querySelector(".money-change__sign")
    ).toHaveTextContent("-");
  });

  it("should use the 'positive' class if the number is positive", () => {
    const component = render(<MoneyChange moneyChangeEntry={positiveValue} />);

    expect(component.container.querySelector(".positive")).toBeInTheDocument();
  });

  it("should use the 'negative' class if the number is negative", () => {
    const component = render(<MoneyChange moneyChangeEntry={negativeValue} />);

    expect(component.container.querySelector(".negative")).toBeInTheDocument();
  });

  it("should always show the absolute value in the value part", () => {
    const component = render(<MoneyChange moneyChangeEntry={negativeValue} />);

    expect(
      component.container.querySelector(".money-change__value")
    ).toHaveTextContent("123");
  });
});
