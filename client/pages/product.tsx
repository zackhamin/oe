import productImage from "../public/philips-plumen.jpg";

import { GetServerSideProps } from "next";
import { getProductdata } from "../utils/getProductData";
import { ProductResponse } from "../types/productResponse";

import getTableData from "../utils/getTableData";
import {
  Header,
  ProductCard,
  AddToBasket,
  Description,
  ProductTable,
} from "../components";

interface ProductPageProps {
  product: ProductResponse;
}

export default function Product({ product }: ProductPageProps) {
  if (!product.allProducts.length) {
    return <h1>Sorry, we are having an error finding your product</h1>;
  }

  const productInfo = product.allProducts[0];

  const tableData = getTableData(productInfo);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
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
      props: { product: { allProducts: [] } },
    };
  }
};
