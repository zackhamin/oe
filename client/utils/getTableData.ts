import React from "react";
import { Product } from "../types/product";
import { ProductResponse } from "../types/productResponse";

function getTableData(productInfo: Product) {
  const formattedProductData = {
    Brand: productInfo.brand,
    "Item Weight": `${productInfo.weight} g`,
    Dimensions: `H: ${productInfo.height} cm, W: ${productInfo.width} cm`,
    "Item Model Number": productInfo.model_code,
    Color: productInfo.colour,
  };
  return formattedProductData;
}

export default getTableData;
