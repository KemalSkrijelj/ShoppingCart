import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import shopPhoto from "../../assets/shop.jpg";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    productsInCart,
    removeFromCart,
    decrementProduct,
    incrementProduct,
    formatNumber,
  } = useContext(AppContext);

  const totalAmount = productsInCart.reduce((acc, curr) => {
    let newPrice;
    if (curr.discountedPrice) {
      newPrice = parseFloat(
        curr.discountedPrice.replace(/\./g, "").replace(",", ".")
      );
    } else {
      newPrice = parseFloat(
        curr.current_price.replace(/\./g, "").replace(",", ".")
      );
    }
    return acc + newPrice;
  }, 0);
  
  return (
    <div className="wrapper-page">
      {productsInCart.length < 1 ? (
        <div className="error">
          <img className="error-img" src={shopPhoto} alt="img-error" />
          <h2>No items in cart</h2>
          <p>
            Start browsing <Link to="/products">products</Link>
          </p>
        </div>
      ) : (
        <div className="wrapper-cart">
          <h1>My Cart</h1>
          {productsInCart.map((product) => {
            const formattedPrice = product.discountedPrice
              ? parseFloat(
                  product.discountedPrice.replace(/\./g, "").replace(",", ".")
                )
              : parseFloat(
                  product.current_price.replace(/\./g, "").replace(",", ".")
                );

            return (
              <CartCard
                key={product.id}
                image={product.image_url}
                title={product.title}
                stock={product.stock}
                price={formattedPrice}
                description={product.short_description}
                onClick={() => removeFromCart(product)}
                quantity={product.quantity}
                decrementProduct={() => decrementProduct(product)}
                incrementProduct={() => incrementProduct(product)}
              />
            );
          })}
          <h1>Total amount: {formatNumber(totalAmount)} rsd</h1>
        </div>
      )}
    </div>
  );
}
