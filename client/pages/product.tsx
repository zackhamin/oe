import { Header } from "../components/Header/Header";
import { ProductCard } from "../components/ProductCard/ProductCard";
import productImage from "../public/philips-plumen.jpg";
import styled from "styled-components";

import AddToBasket from "../components/AddToBasket/AddToBasket";

import { GetServerSideProps } from "next";
import { getProductdata } from "../utils/getProductData";
import { ProductResponse } from "../types/productResponse";
import { Description } from "../components/Description/Description";
import ProductTable from "../components/ProductDataTable/ProductDataTable";

interface ProductPageProps {
  product: ProductResponse;
}

export default function Product({ product }: ProductPageProps) {
  console.log(product);
  const productInfo = product.allProducts[0]; // Assuming there's only one product in the array

  const formattedProductData = {
    Brand: productInfo.brand,
    "Item Weight": `${productInfo.weight} g`,
    Dimensions: `H: ${productInfo.height} cm, W: ${productInfo.width} cm`,
    "Item Model Number": productInfo.model_code,
    Color: productInfo.colour,
  };

  return (
    <BodyWrapper>
      <Header />
      <ProductCard
        image={productImage}
        title={productInfo.name}
        quantity={productInfo.quantity}
        power={productInfo.power}
      />
      <AddToBasket price={productInfo.price} />
      <Description description={productInfo.description} />
      <ProductTable productData={formattedProductData} />
    </BodyWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await getProductdata();

    return {
      props: { product: response.data },
    };
  } catch (error) {
    console.error(error, "Error fetching data");

    return {
      props: { product: [] },
    };
  }
};

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
