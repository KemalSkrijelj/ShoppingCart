import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Cart = () => {
  const { productsInCart } = useContext(AppContext);
  console.log(productsInCart);
  return <></>;
};

export default Cart;
