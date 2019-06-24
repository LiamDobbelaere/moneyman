import React from "react";
import { render } from "@testing-library/react";
import MoneyChangeList, { MoneyChangeListProps } from "./money-change-list";
const moneyChanges: MoneyChangeListProps = {
  values: [{ id: 1, value: 10 }, { id: 2, value: 50 }, { id: 3, value: -10 }]
};
const moneyChangesSum = moneyChanges.values.reduce((a, v) => (a += v.value), 0);

describe("when the component loads", () => {
  it("should render", () => {
    render(<MoneyChangeList values={moneyChanges.values} />);
  });

  it("should have as many list items as there are MoneyChangeEntries", () => {
    const component = render(<MoneyChangeList values={moneyChanges.values} />);

    expect(component.container.querySelectorAll("li")).toHaveLength(
      moneyChanges.values.length
    );
  });

  it("should show the calculated total of all the MoneyChangeEntries", () => {
    const component = render(<MoneyChangeList values={moneyChanges.values} />);

    expect(
      component.container.querySelector(".money-change-list__total")
    ).toHaveTextContent((moneyChangesSum > 0 ? "+" : "-") + moneyChangesSum);
  });
});
