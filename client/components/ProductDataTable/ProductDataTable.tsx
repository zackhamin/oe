import React from "react";

function ProductTable({ productData }) {
  if (!productData) {
    return null;
  }

  const tableData = Object.entries(productData).map(([key, value]) => ({
    label: key,
    value: value,
  }));

  return (
    <div style={{ margin: "20px", color: "var(--ice)" }}>
      <h3 style={{ color: "var(--ice)" }}>Specifications</h3>
      <table>
        <thead></thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.label}</td>
              <td>{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ProductTable };
