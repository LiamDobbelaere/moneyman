import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";

describe("when the component loads", () => {
  it("shows the text value inside the button", () => {
    const component = render(<Button text="sample" />);
    expect(component.getByText("sample")).toBeInTheDocument();
  });
});
