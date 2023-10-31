export const getProductdata = async () => {
  const response = await fetch("http://localhost:3000/api/get-product-data", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Status ${response.status} - Error Getting Product Data`);
  }

  return await response.json();
};
