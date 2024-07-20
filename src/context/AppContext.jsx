import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children, id }) {
  const [productsInCart, setProductsInCart] = useState(() => {
    const savedProducts = localStorage.getItem("cart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }, [productsInCart]);


  const addToCart = (product) => {
    setProductsInCart((prev) => {
      const findingSameIndex = prev.findIndex((p) => p.id === product.id);
      let updatedCart;

      if (findingSameIndex >= 0) {
        updatedCart = prev.map((value, index) =>
          index === findingSameIndex
            ? { ...value, stock: value.stock - 1 }
            : value
        );
      } else {
        updatedCart = [...prev, { ...product, stock: product.stock - 1 }];
      }
      return updatedCart;
    });
  };
  const removeFromCart = (product) => {
    const newProducts = productsInCart.filter((item) => item.id !== product.id);
    setProductsInCart(newProducts);
  };
  
 
  
  const decrementProduct = (product) => {
    const newCartProducts = productsInCart.map((item) => {
      const matchProduct = product?.id === item?.id;
      if (!matchProduct) return item;
      else {
        return {
          ...item,
          quantity: item.quantity - 1,
          stock: item.stock + 1,
        };
      }
    });
    setProductsInCart(newCartProducts);
  };

  const incrementProduct = (product) => {
    const newCartProducts = productsInCart.map((item) => {
      const matchProduct = product?.id === item?.id;
      if (!matchProduct) return item;
      else {
        return {
          ...item,
          quantity: item.quantity + 1,
          stock: item.stock - 1,
        };
      }
    });
    setProductsInCart(newCartProducts);
  };
  
  const formatNumber = ( price ) =>  {
    let formatted = (price / 100).toFixed(2);
//        intiger deo i dec. deo razdvajanje
    let [integerPart, decimalPart] = formatted.split('.');
  
    // Add . u intiger deo
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return `${integerPart},${decimalPart}`;
  }
  const values = {
    productsInCart,
    setProductsInCart,
    addToCart,
    removeFromCart,
    incrementProduct,
    decrementProduct,
    formatNumber,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
