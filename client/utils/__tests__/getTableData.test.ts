import getTableData from "../getTableData";
import { mockProduct } from "../../mocks/mockProduct";

describe("getTableData utility function", () => {
  it("should format a Product object into a table data object", () => {
    const sampleProduct = mockProduct.allProducts[0];

    const expectedFormattedProductData = {
      Brand: "Philips",
      "Item Weight": "77 g",
      Dimensions: "H: 12.6 cm, W: 6.2 cm",
      "Item Model Number": "E27 ES",
      Color: "Cool daylight",
    };

    const formattedData = getTableData(sampleProduct);

    expect(formattedData).toEqual(expectedFormattedProductData);
  });
});
