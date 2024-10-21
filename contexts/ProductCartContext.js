import { useState, createContext } from "react";

export const ProductCartContext = createContext();

export const DataProvide = ({ children }) => {
  const [productSelect, setproductselect] = useState(null);
  const [productfavorite, setproductfavorite] = useState(null);
  return (
    <ProductCartContext.Provider
      value={{
        productSelect,
        setproductselect,
        productfavorite,
        setproductfavorite,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};
