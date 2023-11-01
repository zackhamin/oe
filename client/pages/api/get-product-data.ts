import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";
import { ProductResponse } from "../../types/productResponse";

const getProductData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ errorMessage: `Method ${req.method} not allowed` });
  }

  const query = `
    {
      allProducts {
        name
        id
        quantity
        colour
        power
        price
        description
        brand
        weight
        height
        width
        model_code
        colour
      }
    }
  `;

  try {
    const response = await fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ errorMessage: "Error fetching data" });
  }
};

export default getProductData;
