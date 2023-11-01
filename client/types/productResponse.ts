export type ProductResponse = {
  data: {
    allProducts: [
      {
        name: string;
        id: string;
        quantity: number;
        colour: string;
        power: string;
        price: number;
        description: string;
        brand: string;
        weight: number;
        height: number;
        width: number;
        model_code: string;
      }
    ];
  };
};

export type AllProducts = {
  allProducts: [
    {
      name: string;
      id: string;
      quantity: number;
      colour: string;
      power: string;
      price: number;
      description: string;
      brand: string;
      weight: number;
      height: number;
      width: number;
      model_code: string;
    }
  ];
};
