import React, { useEffect, useState } from "react";
import numberToPounds from "../../utils/numberToPounds";
import { Quantity } from "../Quantity/Quantity";

interface AddToBasketProps {
  price: number;
}

function AddToBasket({ price }: AddToBasketProps) {
  const [quantityValue, setQuantityValue] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);

  useEffect(() => {
    const priceOfSingleUnit = numberToPounds(price);
    const totalUnitPrice = priceOfSingleUnit * quantityValue;
    setUnitPrice(totalUnitPrice);
  }, [quantityValue, price]);

  const handleOnAddToCart = () => {
    console.log("added to cart");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
          alignItems: "center",
          fontSize: "1.6rem",
        }}
      >
        {`£${unitPrice}`}
        <Quantity
          quantityValue={quantityValue}
          setQuantityValue={setQuantityValue}
        ></Quantity>
      </div>
      <button
        onClick={handleOnAddToCart}
        style={{
          borderRadius: "5px",
          border: "none",
          background: "var(--sohoLights)",
          padding: "10px",
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export { AddToBasket };
