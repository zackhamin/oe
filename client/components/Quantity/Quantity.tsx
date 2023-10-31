import React, { useState } from "react";

interface QuantityProps {
  quantityValue: number;
  setQuantityValue: React.Dispatch<React.SetStateAction<number>>;
}

function Quantity({ quantityValue, setQuantityValue }: QuantityProps) {
  const handleOnIncrement = () => {
    setQuantityValue(quantityValue + 1);
  };
  const handleOnDecrement = () => {
    setQuantityValue(quantityValue - 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={handleOnDecrement}
        disabled={quantityValue === 1}
        style={{
          background: quantityValue === 1 ? "var(--plum)" : "var(--sohoLights)",
          borderRadius: "5px",
          color: "white",
          border: "none",
          height: "35px",
          width: "35px",
        }}
      >
        -
      </button>
      <input
        type="number"
        defaultValue={quantityValue}
        style={{
          margin: "0 2px",
          color: "white",
          width: "15px",
          background: "transparent",
          border: "none",
          fontSize: "1.2rem",
        }}
        min="1"
      ></input>
      <button
        onClick={handleOnIncrement}
        style={{
          background: "var(--sohoLights)",
          borderRadius: "5px",
          color: "black",
          border: "none",
          height: "35px",
          width: "35px",
        }}
      >
        +
      </button>
    </div>
  );
}

export { Quantity };
