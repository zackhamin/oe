import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddToBasket } from "./AddToBasket";

describe("AddToBasket component", () => {
  it("should render with the provided price and quantity controls", () => {
    const testPrice = 1000;
    const { getByText, getByRole } = render(<AddToBasket price={testPrice} />);

    expect(getByText(`£10`)).toBeInTheDocument();

    expect(getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(getByRole("spinbutton")).toBeInTheDocument();
    expect(getByRole("button", { name: "-" })).toBeInTheDocument();

    expect(getByText("Add to cart")).toBeInTheDocument();
  });

  it("should update unit price and quantity correctly", () => {
    const testPrice = 1000;
    const { getByText, getByRole } = render(<AddToBasket price={testPrice} />);

    const incrementButton = getByRole("button", { name: "+" });
    fireEvent.click(incrementButton);
    expect(getByText(`£20`)).toBeInTheDocument();

    const decrementButton = getByRole("button", { name: "-" });
    fireEvent.click(decrementButton);
    expect(getByText(`£10`)).toBeInTheDocument();
  });

  //   it("should handle 'Add to cart' button click event", () => {
  //     const testPrice = 10;
  //     const handleOnAddToCart = jest.fn();
  //     const { getByText } = render(<AddToBasket price={testPrice} />);

  //     const addToCartButton = getByText("Add to cart");
  //     console.debug();
  //     fireEvent.click(addToCartButton);

  //     expect(handleOnAddToCart).toHaveBeenCalled();
  //   });
});
