import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children, id }) {
  const [productsInCartOutlet, setProductsInCartOutlet] = useState(() => {
    const savedOutletProducts = localStorage.getItem("cartOutlet");
    return savedOutletProducts ? JSON.parse(savedOutletProducts) : [];
  });
  const [productsInCart, setProductsInCart] = useState(() => {
    const savedProducts = localStorage.getItem("cart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  useEffect(() => {
    localStorage.setItem("cartOutlet", JSON.stringify(productsInCartOutlet));
  }, [productsInCartOutlet]);

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

  const addToCartOutlet = (product) => {
    setProductsInCartOutlet((prevProductsInCartOutlet) => {
      if (!prevProductsInCartOutlet) prevProductsInCartOutlet = [];
      const existingProductIndex = prevProductsInCartOutlet.findIndex(p => p.id === product.id);
      let updatedCart;

      if (existingProductIndex >= 0) {
        updatedCart = prevProductsInCartOutlet.map((p, index) =>
          index === existingProductIndex ? { ...p, stock: p.stock - 1 } : p
        );
      } else {
        updatedCart = [...prevProductsInCartOutlet, { ...product, stock: product.stock - 1 }];
      }

      return updatedCart;
    });
  };
  const removeFromCartOutlet = (productOnSale) => {
    const newProducts = productsInCartOutlet.filter((item) => item.id !== productOnSale.id);
    setProductsInCartOutlet(newProducts);
  };
  
  const values = {
    productsInCart,
    setProductsInCart,
    addToCart,
    removeFromCart,
    addToCartOutlet,
    removeFromCartOutlet,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
