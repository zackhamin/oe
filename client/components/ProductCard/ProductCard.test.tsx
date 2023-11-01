import React from "react";
import { render } from "@testing-library/react";
import { ProductCard } from "./ProductCard"; // Adjust the import path as needed

describe("ProductCard component", () => {
  it("should render with the provided props", () => {
    const testProps = {
      image: { src: "/test-image.jpg" },
      title: "Test Product",
      power: "100W",
      quantity: 5,
    };

    const { getByText, getByRole } = render(<ProductCard {...testProps} />);

    expect(getByText(testProps.title)).toBeInTheDocument();
    expect(
      getByText(`${testProps.power} // Packet of ${testProps.quantity}`)
    ).toBeInTheDocument();

    const imageElement = getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", testProps.image.src);
  });
});
