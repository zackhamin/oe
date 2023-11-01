import React from "react";
import { render } from "@testing-library/react";
import { ProductTable } from "./ProductDataTable";

describe("ProductTable component", () => {
  it("should render with the provided product data", () => {
    const testProductData = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    };

    const { getByText } = render(
      <ProductTable productData={testProductData} />
    );

    expect(getByText("Specifications")).toBeInTheDocument();

    for (const key of Object.keys(testProductData)) {
      expect(getByText(key)).toBeInTheDocument();
      expect(getByText(testProductData[key])).toBeInTheDocument();
    }
  });

  it("should return null if product data is not provided", () => {
    const { container } = render(<ProductTable productData={null} />);

    expect(container.innerHTML).toBe("");
  });
});
