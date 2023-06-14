import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  
  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0);
  
  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // CheckOut side Menu - Open/Close
  const [isCheckoutSideMeuOpen, setIsCheckoutSideMeuOpen] = useState(false);
  const openCheckoutSideMeu = () => setIsCheckoutSideMeuOpen(true);
  const closeCheckoutSideMeu = () => setIsCheckoutSideMeuOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  // Shopping Cart - Add Products to Cart
  const [carProducts, setCarProducts] = useState([])

  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        carProducts,
        setCarProducts,
        isCheckoutSideMeuOpen,
        openCheckoutSideMeu,
        closeCheckoutSideMeu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
