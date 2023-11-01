import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Quantity } from "./Quantity";

describe("Quantity component", () => {
  it("should render with the provided quantity value and buttons", () => {
    const testQuantityValue = 3;
    const { getByText, getByDisplayValue } = render(
      <Quantity quantityValue={testQuantityValue} setQuantityValue={jest.fn} />
    );

    expect(getByText("-")).toBeInTheDocument();
    expect(getByDisplayValue(testQuantityValue.toString())).toBeInTheDocument();
    expect(getByText("+")).toBeInTheDocument();
  });

  it("should increment and decrement the quantity value correctly", () => {
    let testQuantityValue = 3;
    const setQuantityValue = (newValue) => {
      testQuantityValue = newValue;
    };

    const { getByText } = render(
      <Quantity
        quantityValue={testQuantityValue}
        setQuantityValue={setQuantityValue}
      />
    );

    const incrementButton = getByText("+");
    fireEvent.click(incrementButton);
    expect(testQuantityValue).toBe(4);

    const decrementButton = getByText("-");
    fireEvent.click(decrementButton);
    expect(testQuantityValue).toBe(2);
  });
});
