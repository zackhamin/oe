import { Header } from "../components/Header/Header";
import { ProductCard } from "../components/ProductCard/ProductCard";
import productImage from "../public/philips-plumen.jpg";
import styled from "styled-components";

import { AddToBasket } from "../components/AddToBasket/AddToBasket";

import { GetServerSideProps } from "next";
import { getProductdata } from "../utils/getProductData";
import { ProductResponse } from "../types/productResponse";
import { Description } from "../components/Description/Description";
import { ProductTable } from "../components/ProductDataTable/ProductDataTable";
import getTableData from "../utils/getTableData";

interface ProductPageProps {
  product: ProductResponse;
}

export default function Product({ product }: ProductPageProps) {
  const productInfo = product.allProducts[0];

  const tableData = getTableData(productInfo);

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
      <ProductTable productData={tableData} />
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
