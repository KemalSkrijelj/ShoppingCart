import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Cart = () => {
  const { productsInCart } = useContext(AppContext);
  console.log(productsInCart);
  return (
    <>
      <div className="card-producs"></div>
      <div className="card-outlet"></div>
    </>
  );
};

export default Cart;
